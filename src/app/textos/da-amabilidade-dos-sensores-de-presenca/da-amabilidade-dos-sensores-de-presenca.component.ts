import { animate, sequence, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { concat, defer, fromEvent, interval, Observable, of, Subject } from 'rxjs';
import { debounceTime, mapTo, skipUntil, takeUntil, timeoutWith } from 'rxjs/operators';
import { ScrollService } from 'src/app/scroll.service';

@Component({
  selector: 'app-da-amabilidade-dos-sensores-de-presenca',
  templateUrl: './da-amabilidade-dos-sensores-de-presenca.component.html',
  styleUrls: ['./da-amabilidade-dos-sensores-de-presenca.component.css'],
  animations: [
    trigger('anim', [
       transition('* => void', [
         style({ opacity: '1', transform: 'translateX(0)'/*, 'box-shadow': '0 1px 4px 0 rgba(0, 0, 0, 0.3)'*/}),
         sequence([
           animate(".35s ease", style({ 'text-decoration': 'line-through', opacity: '.2', transform: 'translateX(20px)', 'box-shadow': 'none'  })),
           animate(".1s ease", style({ opacity: 0, transform: 'translateX(20px)', 'box-shadow': 'none'  }))
         ])
       ]),
       transition('void => *', [
         style({ opacity: '0', transform: 'translateX(20px)', 'box-shadow': 'none' }),
         sequence([
           animate(".1s ease", style({ opacity: '.2', transform: 'translateX(20px)', 'box-shadow': 'none'  })),
           animate(".35s ease", style({ opacity: 1, transform: 'translateX(0)'/*, 'box-shadow': '0 1px 4px 0 rgba(0, 0, 0, 0.3)'*/, background: '#FFF68B'  }))
         ])
       ])
   ])
 ]
})
export class DaAmabilidadeDosSensoresDePresencaComponent implements OnInit, AfterViewInit, OnDestroy {

  texto = [
    'Um','sensor','de','presença','é','A MÁQUINA MAIS HUMANA QUE EXISTE.','Ele','conversa','com','você,','ele sente você.','Ele','de','alguma','maneira','confirma','que','você','está','aqui.','Então','ele','abre','a','porta','pra','você,','ele','liga','a','luz','ou','abre','a','sua','torneira.','Porque','você','existe,','porque','você','está','aqui.','Eu','estou','aqui.','Essa','é','uma','grande','afirmação.','Eu','estou','aqui.','E','agora','é','agora,','e','já','passou.','Eu','sei','disso','porque','a','luz','acendeu.','E','isso','aconteceu.','Porque','a','luz','acendeu.','E','fora','disso','é','muito','complicado','afirmar','com','certeza','qualquer','coisa','porque','falta','esse','elemento','concreto','de','prova.','Como','ter','certeza?','Alguém','esbarra','em','você','na','rua,','alguém','te','liga,','alguém','te','manda','um','e-mail,','alguém','se','apaixona','por','você,','alguém','te','beija...','fora','isso?','Quando','você','está','completamente','só','no','meio','da','noite','e','','ouve','ao','longe','a','televisão','do','vizinho','que','passa','algum','filme','antigo','em','preto','e','branco','e','você','se','vê','confrontado','com','essa','terrível','sensação','de','insignificância','por','ser','uma','entre','bilhões','de','pessoas','que','tentam','dormir','e','não','conseguem','e','ficam','sozinhas','paradas','no','meio','de','uma','sala','escura.','Se','pelo','menos','eu','tivesse','alguém','disposto','a','olhar','constantemente','pra','mim','e,','de','tempos','em','tempos,','me','dizer,','você','está','aqui.','Talvez','eu','compre','um','cachorro...','um','desses','com','a','cara','achatada','que','quase','não','se','movem...<br/>',
    'Qualquer coisa<br/>',
    'Qualquer coisa,<br/>',
    'Um animal,<br/>',
    'qualquer espécie<br/>',
    'Uma máquina<br/>',
    'Qualquer coisa<br/>',
    'Qualquer coisa','<br/>',
    'que estabeleça','concretamente','<br/>',
    'certamente<br/>',
    'efetivamente<br/>',
    'sua existência no mundo!<br/>',
    'Você','estaria','disposto','a','olhar','para','mim','e','de','vez','em','quando','afirmar','minha existência?<br/>',
    'Improvável.<br/>',
    'Talvez','você','tivesse','que','me','amar.<br/>',
    'Você me ama?<br/>',
    'Desculpa','perguntar','assim','tão','diretamente<br/>',
    'Tão','inesperadamente<br/>',
    'tão desesperadamente<br/>',
    'Você...','?<br/>',
    'Você...','?<br/>',
    'Você','ao','menos?<br/>',
    'Você','ao','menos','me','percebe?<br/>',
    'Talvez você tivesse que deitar comigo,','eventualmente.<br/>',
    'Talvez','você','tivesse','que','ficar','acordada','comigo','durante','a','noite','inteira','e','olhar','pra','mim','de','vez','em','quando<br/>',
    'E caso eu dormisse<br/>',
    'E','caso','eu','sonhasse<br/>',
    'E','caso','eu','tivesse','qualquer','tipo','de','pesadelo<br/>',
    'Talvez','você','tivesse','que','sussurrar','docemente','no','meu','ouvido','alguma','coisa','e','talvez','tocar','de','leve','no','meu','rosto','ou','na','minha','perna','pra','que','eu','de','dentro','do','sonho','ou','do','pesadelo','soubesse','que','está','tudo','bem','e','que','eu','não','estou','aqui','e','você','está','lá','e','eu','estou','lá,','apagado.','<br/>',
    'Agora.','Agora','seria','uma','ótima','hora','pra','você','me','acordar.<br/>',
    'Agora...<br/>',
    'Não?<br/>',
  ];

  fragmentos: string[] = [];

  toque = false;
  scroll = false;
  volume = false;
  winHeight = 0;
  destroy$: Subject<boolean> = new Subject<boolean>();

  // controla a exibição da dica inicial de interação
  interagiu = false;
  // reflete o estado real da permissão de microfone no navegador
  micPermissao: 'pendente' | 'concedida' | 'negada' = 'pendente';

  soundObserver$: any;

  @ViewChild('continente',{static: false}) continenteEl: ElementRef;
  @ViewChildren('fragmentoEl') fragmentoEls: QueryList<ElementRef>;
  audioContext?: AudioContext;
  audioStream?: MediaStream;
  private micConectado = false;
  private micConectando = false;
  private micDesconectado$ = new Subject<void>();

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {

    this.scrollService.getWinHeight().pipe(takeUntil(this.destroy$)).subscribe((winHeight)=>{
      this.winHeight = winHeight;
    });
    
    interval(150).pipe(takeUntil(this.destroy$)).subscribe(()=>{
      if (this.toque || this.volume) {
        if (!this.interagiu) {
          this.interagiu = true;
        }
        const r = Math.random();
        if (r > .5 && (this.texto.length > this.fragmentos.length)) {
          this.fragmentos.push(this.texto[this.fragmentos.length]);
        }
      }
    });

    interval(150).pipe(takeUntil(this.destroy$)).subscribe(()=>{
      if (!this.toque && !this.volume) {
        this.fragmentos.pop();
      }
    });

    const move$ = fromEvent(document, 'mousemove').pipe(takeUntil(this.destroy$),debounceTime(5),mapTo('move'));
    const moveAndStop$ = move$.pipe(
      timeoutWith(
        1000, 
        defer(() => concat(
          of('stop'), 
          moveAndStop$.pipe(skipUntil(move$))
        ))
      )
    ); 

    moveAndStop$
      .subscribe(e => {
        this.toque = (e == 'move') 
      });

    // conecta ao observer de som
    this.soundLevel();
    this.observarPermissaoMicrofone();
  }

  private async observarPermissaoMicrofone(): Promise<void> {
    if (!navigator.permissions?.query) {
      // navegador sem suporte à Permissions API para 'microphone' (ex: Firefox mais antigo);
      // o estado só será conhecido depois que soundLevel() chamar getUserMedia()
      return;
    }
    try {
      const status = await navigator.permissions.query({ name: 'microphone' as PermissionName });
      this.atualizarMicPermissao(status.state);
      // mantém o aviso sincronizado caso a pessoa mude a permissão
      // nas configurações do navegador sem recarregar a página
      status.onchange = () => this.atualizarMicPermissao(status.state);
    } catch {
      // 'microphone' não é um nome de permissão suportado neste navegador
    }
  }

  private atualizarMicPermissao(state: PermissionState): void {
    if (state === 'granted') {
      this.micPermissao = 'concedida';
      if (!this.micConectado) {
        // permissão foi concedida (agora, ou já estava concedida ao carregar a página)
        // e ainda não conectamos o microfone de fato - conecta
        this.soundLevel();
      }
    } else {
      this.micPermissao = state === 'denied' ? 'negada' : 'pendente';
      this.volume = false;
      this.desconectarMic();
    }
  }

  private desconectarMic(): void {
    if (!this.micConectado) {
      return;
    }
    this.micDesconectado$.next();
    this.audioStream?.getTracks().forEach(track => track.stop());
    this.audioContext?.close();
    this.audioContext = undefined;
    this.audioStream = undefined;
    this.micConectado = false;
  }

  ngAfterViewInit(): void {
    // sempre que um novo fragmento (linha) é renderizado, verifica se ele
    // ultrapassou a viewport e, se sim, rola suavemente até ele.
    this.fragmentoEls.changes.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.scrollToLastFragmentoIfNeeded();
    });
  }

  // respiro entre a última linha e a borda inferior da janela, em px
  private readonly offsetInferior = 96;

  private scrollToLastFragmentoIfNeeded(): void {
    const els = this.fragmentoEls?.toArray();
    if (!els || els.length === 0) {
      return;
    }
    const lastEl: HTMLElement = els[els.length - 1].nativeElement;
    const rect = lastEl.getBoundingClientRect();
    const limiteInferior = window.innerHeight - this.offsetInferior;
    if (rect.bottom > limiteInferior) {
      const delta = rect.bottom - limiteInferior;
      window.scrollBy({ top: delta, behavior: 'smooth' });
    }
  }

  soundLevel = async () => {
    if (this.micConectado || this.micConectando) {
      return;
    }
    this.micConectando = true;
    // Initialize
    try {
      this.audioStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true
        }
      });
      this.micPermissao = 'concedida';
      this.micConectado = true;
      this.audioContext = new AudioContext();
      const audioSource = this.audioContext.createMediaStreamSource(this.audioStream);
      const analyser = this.audioContext.createAnalyser();
      analyser.fftSize = 512;
      analyser.minDecibels = -127;
      analyser.maxDecibels = 0;
      analyser.smoothingTimeConstant = 0.4;
      audioSource.connect(analyser);
      const volumes = new Uint8Array(analyser.frequencyBinCount);

      const soundObserver$ = Observable.create(observer => {
        const updateVolume = () => {
          analyser.getByteFrequencyData(volumes);
          let volumeSum = 0;
          for(const volume of volumes) volumeSum += volume;
          const averageVolume = volumeSum / volumes.length;
          observer.next(averageVolume)
        }
    
        interval(100).pipe(takeUntil(this.destroy$), takeUntil(this.micDesconectado$)).subscribe(()=>{
          updateVolume()
        });
      })

      soundObserver$.pipe(takeUntil(this.destroy$), takeUntil(this.micDesconectado$)).subscribe((vol) => {
        this.volume = vol > 25;
        console.log(vol)
      })
    } catch(e) {
      this.micPermissao = 'negada';
      console.error('Falha ao iniciar o som', e);
    } finally {
      this.micConectando = false;
    }
  }
  
  ngOnDestroy() {
    this.audioContext?.close();
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}