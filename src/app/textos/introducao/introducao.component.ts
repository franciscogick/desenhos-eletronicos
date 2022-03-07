import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ParagrafosService } from 'src/app/paragrafos.service';

@Component({
  selector: 'app-introducao',
  templateUrl: './introducao.component.html',
  styleUrls: ['./introducao.component.css']
})
export class IntroducaoComponent implements OnInit,AfterViewInit,OnDestroy {

  nodeId='101';

  lexias: {texto:string,link:string,name:string}[] = [
    {texto:'Em <b>A pedra de Eurípedes</b> procede-se a uma reflexão sobre as transformações do texto teatral ao longo da história em relação às tecnologias da escrita.',link:'a-pedra-de-euripedes',name:'A pedra de Eurípedes'},
    {texto:'<b>Novas grafias</b> discute as transformações em nossas relações de escrita e leitura a partir da interação com tecnologias digitais, além de realizar um passeio pelo território da literatura digital que mobiliza discussões acerca das tecnologias e estratégias de composição de textos digitais.',link:'novas-grafias',name:'Novas grafias'},
    {texto:'Em <b>Dramaturgias digitais</b> são analisados 4 criações de literatura digital que têm o teatro como horizonte, <span class="titulo-obra">The last song of Violeta Parra</span>, <span class="titulo-obra">TRANS.MISSION [A.DIALOGUE]</span>, <span class="titulo-obra">AI: when a robot writes a play</span> e <span class="titulo-obra">AI</span>.',link:'dramaturgias-digitais',name:'Dramaturgias digitais'},
    {texto:'<b>Novas grafias 2</b> discute características observadas nas dramaturgias digitais analisadas.',link:'novas-grafias-2',name:'Novas grafias 2'}
  ]

  destroy$: Subject<boolean> = new Subject<boolean>();

  @ViewChild('innerEl', { read: ElementRef }) public innerEl: ElementRef<any>;

  constructor(private titleService: Title, private paragrafosService: ParagrafosService) { 
    this.titleService.setTitle('Dramaturgias digitais | Introdução');
  }

  ngOnInit(): void {
    this.shuffle(this.lexias);
    interval(5000).pipe(takeUntil(this.destroy$))
    .subscribe(() => this.shuffle(this.lexias));
  }

  ngAfterViewInit(): void {
    this.paragrafosService.addNumbers(this.innerEl);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  

}
