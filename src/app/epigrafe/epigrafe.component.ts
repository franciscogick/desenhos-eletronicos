import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-epigrafe',
  templateUrl: './epigrafe.component.html',
  styleUrls: ['./epigrafe.component.css']
})
export class EpigrafeComponent implements OnInit,AfterViewInit {
  frase = 'Isso que te escrevi é um desenho eletrônico e não tem passado ou futuro: é simplesmente já';
  palavras = [];
  palavra: string = '';

  play = true;
  delay = 500;
  font = 8;

  i = 0;
  volta = false;

  showModalFrase = false;
  fraseNext: string = null;

  @ViewChild('texto',{static: false}) el: ElementRef;
  //@ViewChild('in',{static: false}) elIn: ElementRef;
  //@ViewChild('out',{static: false}) elOut: ElementRef;

  constructor(private renderer: Renderer2, private titleService: Title) {
    this.titleService.setTitle('Desenhos eletrônicos | epígrafe'); 
  }

  ngOnInit():void {
    this.palavras = this.frase.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    .replace(/\s{2,}/g," ").split(' ');
    //this.palavra = this.palavras[0];
  }

  ngAfterViewInit():void {
    setTimeout(() => {this.roll()});
  }

  roll():void {
    if (this.play) {
      setTimeout(() => {

        if (this.i >= this.palavras.length) {
          this.i = 0;
          this.volta = true;
        }

        if (this.i > 0 || this.volta) {
          let c = this.el.nativeElement.children[0];
          c.classList.remove('in');
          c.classList.add('out');
          setTimeout(()=>{this.renderer.removeChild(this.el.nativeElement,c)},(this.delay-100));
        } 

        let enter = this.renderer.createElement('div');
        this.renderer.setProperty(enter,'innerHTML',this.palavras[this.i])
        this.renderer.addClass(enter,'in');
        this.renderer.setStyle(enter,'animation-duration',((this.delay-100)/1000) + 's');
        //this.renderer.setStyle(enter,'font-size',this.font + 'rem')

        this.renderer.appendChild(this.el.nativeElement,enter);
        
        this.i++;
        this.roll();

      },this.delay);
    }
  }

  togglePlayPause():void {
    this.play = !this.play;
    this.roll();
  }

  showFrase():void {
    this.showModalFrase = true;
    this.play = false;
  }

  dismissModalFrase():void {
    this.showModalFrase = false;
    this.play = true;

    this.roll();
  }

  updateFrase():void {
    this.palavras = this.fraseNext.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    .replace(/\s{2,}/g," ").split(' ');
    this.i = 0;
    this.dismissModalFrase();
  }

  resetFrase():void {
    this.palavras = []
    this.palavras = this.frase.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    .replace(/\s{2,}/g," ").split(' ');
    this.dismissModalFrase();    
  }
}

