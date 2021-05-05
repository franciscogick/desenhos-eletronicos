import { animate, sequence, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Scroll } from '@angular/router';
import { concat, defer, fromEvent, interval, of, Subject } from 'rxjs';
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
export class DaAmabilidadeDosSensoresDePresencaComponent implements OnInit {

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

  presenca = false;
  scroll = false;
  winHeight = 0;
  destroy$: Subject<boolean> = new Subject<boolean>();

  @ViewChild('continente',{static: false}) continenteEl: ElementRef;

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {

    this.scrollService.getWinHeight().pipe(takeUntil(this.destroy$)).subscribe((winHeight)=>{
      this.winHeight = winHeight;
    });
    
    interval(150).pipe(takeUntil(this.destroy$)).subscribe(()=>{
      if (this.presenca) {
        const r = Math.random();
        if (r > .5) {
          this.fragmentos.push(this.texto[this.fragmentos.length]);
          /*const r = this.continenteEl.nativeElement.getBoundingClientRect();
          const d = (r.top + r.height) - this.winHeight;
          if (d > 0) {
            window.scrollTo(0,document.body.scrollHeight);
          }*/
        }
      }
    });

    interval(150).pipe(takeUntil(this.destroy$)).subscribe(()=>{
      if (!this.presenca) {
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
        this.presenca = (e == 'move') 
      });
  }
  
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
