import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OpenedTextsService } from 'src/app/opened-texts.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-travessia',
  templateUrl: './travessia.component.html',
  styleUrls: ['./travessia.component.css']
})
export class TravessiaComponent implements OnInit {

  title = 'osso';

  interacted = true;

  last = null;

  fabula = [];

  opcoes = {
    lugares: ['de casa','do teatro','do hospital'],
    momentos: ['à noite','de madrugada','na vida'],
    momentos2: ['da noite','da madrugada','da vida'],
    deslocamentos: ['corre','caminha','rasteja','deriva'],
    transportes: ['carros','motos','lanchas','naves espaciais','pernas','tentativas fracassadas']
  }

  imagens = [
    'back.png',
    'coluna-alt.png',
    'x1.png',
    'bartolomeu-T800.png',
    'coluna.png',
    'x2.png',
    'bartolomeu-caveira.png',
    'pe.png',
    'x3.png',
    'bartolomeu-estatua.png',
    'pe1.png',
    'x4.png',
    'bartolomeu.png',
    'perna1.png',
    'x5.png',
    'circulacao-face.png',
    'tronco.png'
  ];

  textos = {
    chico: 'Acidentes',
    lauren: 'Cosmos'
  };

  loaded = [];

  @ViewChild('wrapper_mapa',{static:false}) wrapper_mapa:ElementRef;
  @ViewChild('mapa',{static:false}) mapa:ElementRef;

  @ViewChild('bartolomeu1',{static:false}) bartolomeu1:ElementRef;
  @ViewChild('bartolomeu2',{static:false}) bartolomeu2:ElementRef;
  @ViewChild('bartolomeu3',{static:false}) bartolomeu3:ElementRef;

  @ViewChild('texto1',{static:false}) texto1:ElementRef;
  @ViewChild('texto2',{static:false}) texto2:ElementRef;
  @ViewChild('texto5',{static:false}) texto5:ElementRef;
  @ViewChild('texto3',{static:false}) texto3:ElementRef;
  @ViewChild('texto4',{static:false}) texto4:ElementRef;

  @ViewChild('link_texto1',{static:false}) link_texto1:ElementRef;
  @ViewChild('link_texto2',{static:false}) link_texto2:ElementRef;
  @ViewChild('link_texto5',{static:false}) link_texto5:ElementRef;
  @ViewChild('link_texto3',{static:false}) link_texto3:ElementRef;
  @ViewChild('link_texto4',{static:false}) link_texto4:ElementRef;

  @ViewChild('chico',{static:false}) chico:ElementRef;


  Timeline: GSAPTimeline;

  constructor (private openedTextsService: OpenedTextsService) {}

  ngOnInit():void {

    this.contaFabula();
    setInterval(()=>{    
      this.contaFabula();
    },5000);
  }

  ngAfterViewInit():void {

    gsap.set(this.mapa.nativeElement,{opacity:0});

    gsap.set([
      this.texto1.nativeElement,
      this.texto2.nativeElement,
      this.texto3.nativeElement,
      this.texto4.nativeElement,
      this.texto5.nativeElement,
      //this.textoLauren.nativeElement
    ],{autoAlpha:0});
    //gsap.set([this.texto1.nativeElement,this.texto2.nativeElement,this.texto3.nativeElement,this.texto4.nativeElement,this.texto5.nativeElement],{scale:.25,transformOrigin:'left top'});
    gsap.set([this.bartolomeu2.nativeElement,this.bartolomeu3.nativeElement],{autoAlpha:0});

    this.wrapper_mapa.nativeElement.scrollTo(718,598);

    // TIMELINE BARTOLOMEU
    this.Timeline = gsap.timeline({repeat:-1,paused:true});

    this.Timeline
      .to(this.bartolomeu2.nativeElement,{duration:2, autoAlpha:1},2)
      .to(this.bartolomeu2.nativeElement,{duration:2, autoAlpha:0},4)
      .to(this.bartolomeu3.nativeElement,{duration:2, autoAlpha:1},8)
      .to(this.bartolomeu3.nativeElement,{duration:2, autoAlpha:0},10)

    //preload imagens
    this.imagens.forEach(i => {
      let img = new Image();
      img.onload = () => {
        this.loaded.push(img);
        if (this.loaded.length == this.imagens.length) {
          gsap.to(this.mapa.nativeElement,{duration:1,opacity:1});
        }
      }
      img.src = '/assets/travessia/'+i;
    });
  }

  ngOnDestroy():void {
    this.Timeline.kill();
    this.Timeline = null;
  }

  escolha(list):string {
    let rand = Math.floor(Math.random() * this.opcoes[list].length);
    return this.opcoes[list][rand];
  }

  contaFabula():void {
    this.fabula = [
      {txt:`ela sai ${this.escolha('lugares')} ${this.escolha('momentos')}`,x:463,y:341,r:0},
      {txt:`não é tarde ${this.escolha('momentos')} talvez seja o começo ${this.escolha('momentos2')}`,x:442,y:474,r:0},
      {txt:`ela sai ${this.escolha('lugares')} para não ter que ficar porque não pode`,x:438,y:594,r:0},
      {txt:'não quer principalmente',x:407,y:685,r:0},
      {txt:'as paredes parece que avançaram sobre ela',x:392,y:772,r:0},
      {txt:'as janelas como que sumiram',x:392,y:869,r:0},
      {txt:'ela saiu correndo',x:417,y:961,r:0},
      {txt:'atirou-se pela porta que já estava do tamanho daquela da Alice',x:427,y:1046,r:0},
      {txt:'ela desce as escadas sem olhar pra trás',x:452,y:1131,r:0},
      {txt:'sai do prédio para a rua vazia',x:460,y:1209,r:0},
      {txt:`e apenas ${this.escolha('deslocamentos')}`,x:483,y:1295,r:0},
      {txt:'por aí',x:501,y:1387,r:0},
      {txt:'sem saber por onde ',x:501,y:1488,r:0},
      {txt:`sem dar pelas ${this.escolha('transportes')} dos entregadores de comida`,x:496,y:1585,r:0},
      {txt:`sem dar pelas ${this.escolha('transportes')} dos entregadores de comida`,x:483,y:1663,r:0},
      {txt:'também sem fome é verdade',x:452,y:1759,r:0},
      {txt:'sem dar pelos carros',x:408,y:1849,r:0},
      {txt:'a não ser quando é tarde demais',x:388,y:1918,r:0},
      {txt:'gira no ar e cai sobre o capô e o para-brisas',x:370,y:1964,r:0},
      {txt:'rola para o chão e fica lá por um tempo',x:335,y:2016,r:0},
      {txt:'levanta com dificuldade e vê dentro do carro a motorista chorando',x:315,y:2062,r:0},
      {txt:'a motorista sai do carro apressada e a ajuda a levantar enquanto fala sem parar',x:303,y:2100,r:0},
      {txt:'a motorista se preocupa com sua cabeça e disfarça quando vê sua perna',x:303,y:2138,r:0},
      {txt:'segura suas mãos',x:303,y:2171,r:0},
      {txt:'chama a ambulância',x:314,y:2210,r:0},
      {txt:`e esperam as duas sentadas`,x:325,y:2264,r:0}
    ];
  }

  onZoomIn(texto):void {
    let x,y = 0;
    let el = this[texto].nativeElement;
    let par = el.parentElement;
    let rect = el.getBoundingClientRect();
    let parRect = par.getBoundingClientRect();
    let wW = window.innerWidth;
    x = (el.offsetLeft + par.offsetLeft) - (wW/2) + (rect.width/2);
    y = (el.offsetTop + par.offsetTop) - 20;

    gsap.to(this[texto].nativeElement,{duration:.15,autoAlpha:1});
    gsap.to(this[`link_${texto}`].nativeElement,{duration:.15,autoAlpha:0});

    this.wrapper_mapa.nativeElement.scrollTo({
      left:x,top:y,behavior:'smooth'
    });
    
    this.openedTextsService.setOpenedState(texto,true);
  }
  onZoomOut(texto):void {
    gsap.to(this[texto].nativeElement,{duration:.15,autoAlpha:0});
    gsap.to(this[`link_${texto}`].nativeElement,{duration:.15,autoAlpha:1});

    this.openedTextsService.setOpenedState(texto,false);
  }

  onMouseOverBartolomeu():void {
    //this.Timeline.play();
  }
  onMouseOutBartolomeu():void {
    //this.Timeline.pause();
  }

  go(from,to):void {
    let x,y = 0;
    let el = this[to].nativeElement;
    let rect = el.getBoundingClientRect();
    let wW = window.innerWidth;
    let wH = window.innerHeight;
    x = (el.offsetLeft) - (wW/2) + (rect.width/2);
    y = (el.offsetTop) - (wH/2) + (rect.height/2);

    this.last = from;

    this.wrapper_mapa.nativeElement.scrollTo({
      left:x,top:y,behavior:'smooth'
    });
  }

  back():void {
    let x,y = 0;
    let el = this[this.last].nativeElement;
    let rect = el.getBoundingClientRect();
    let wW = window.innerWidth;
    x = (el.offsetLeft) - (wW/2) + (rect.width/2);
    y = (el.offsetTop) - 20;

    this.last = null;

    this.wrapper_mapa.nativeElement.scrollTo({
      left:x,top:y,behavior:'smooth'
    });
  }

}
