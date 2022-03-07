import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-citacao-direta',
  templateUrl: './citacao-direta.component.html',
  styleUrls: ['./citacao-direta.component.css']
})
export class CitacaoDiretaComponent implements OnInit {

  @Input() original: string = null; 
  @Input() portugues: string; 
  @Input() ref: string; 
  @Input() pg: string; 
  @Input() min: boolean = false;
  @Input() abrv: string = null;


  @Input() inline: boolean = false;
  @Input() quotes: boolean = true;


  txt: string = null;
  obs: string = null;
  switch: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.txt = this.portugues;
    this.obs = this.portugues && this.original ? 'tradução nossa' : null;
  }

  switchLanguage():void {
    this.switch = !this.switch;
  }

}
