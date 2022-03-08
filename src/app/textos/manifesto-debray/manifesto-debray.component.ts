import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { interval, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-manifesto-debray',
  templateUrl: './manifesto-debray.component.html',
  styleUrls: ['./manifesto-debray.component.css']
})
export class ManifestoDebrayComponent implements OnInit,AfterViewInit,OnDestroy {

  manifesto: string[] = [
    'Eu sou papiro, pergaminho, papel, tela de computador.',
    'Eu sou o Decalogue, François Villon, Lenin e Macintosh.',
    'Eu sou pictograma e alfabeto, texto e hipertexto, manuscrito, página impressas e tela radiante'
  ];

  fraseManifesto: string;

  enunciacoes: string[] = [
    'diz',
    'grita',
    'informa',
    'nota',
    'elucubra',
    'especula',
  ]

  enunciacao: string;

  state: boolean = false;

  destroy$: Subject<boolean> = new Subject<boolean>();

  @ViewChild('wrapper',{static:false}) wrapper:ElementRef;
  @ViewChild('frase',{static:false}) frase:ElementRef;

  constructor(  ) { }

  ngOnInit(): void {
    interval(100).pipe(takeUntil(this.destroy$))
    .subscribe(() => this.enunciacao = this.enunciacoes[Math.floor(Math.random() * this.enunciacoes.length)]);
  }

  ngAfterViewInit():void {

    this.fraseManifesto = this.manifesto[Math.floor(Math.random()*this.manifesto.length)];

    //gsap.set(this.frase.nativeElement, {xPercent: 100,yPercent: 50});

    console.log(this.frase.nativeElement.scrollWidth,this.wrapper.nativeElement.offsetWidth,(this.frase.nativeElement.scrollWidth - this.wrapper.nativeElement.offsetWidth) * -1)
    
      //const [x, xEnd] = ['100%', (this.frase.nativeElement.scrollWidth - this.wrapper.nativeElement.offsetWidth) * -1];
      const [x, xEnd] = ['100%', ((this.fraseManifesto.length * 100) - this.wrapper.nativeElement.offsetWidth) * -1];

      gsap.fromTo(this.frase.nativeElement, { x }, {
        x: xEnd,
        scrollTrigger: {
          trigger: this.wrapper.nativeElement,
          scrub: 0.5,
          //markers: true,
          //pin: true,
          start: 'bottom 80%',
          // start: '-500',
          //end: '+=200'
          end: 'bottom'
        } 
      });
  
  
    // this.timeline = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: this.wrapper.nativeElement,
    //     pin:true,
    //     scrub:0.3,
    //     start: "top top",
    //     end: "+="+this.frase.nativeElement.clientWidth
    //   }
    // });
  
    // this.timeline
    // .to(this.frase.nativeElement, {xPercent: -100, duration: this.fraseManifesto.length *100, ease: "none", stagger:3})
    //.to({},{duration:1}) // an empty tween to generate a pause at the end
  }


  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
