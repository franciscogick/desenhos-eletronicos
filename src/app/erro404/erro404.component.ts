import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erro404',
  templateUrl: './erro404.component.html',
  styleUrls: ['./erro404.component.css']
})
export class Erro404Component implements OnInit {

  palavras = [
    'devir',
    'erro',
    'potência',
    'lugar',
    'dramaturgia',
  ];
  motivos = [
    'tudo fica moderno se a gente coloca "devir-" antes',
    'erra',
    'odeio a palavra lugar',
    '...',
    'é grande',
  ];
  r1 = 0;
  r2 = 0;

  constructor() { }

  ngOnInit(): void {
    let l1 = this.palavras.length;
    let l2 = this.motivos.length;
    this.r1 = Math.floor(Math.random() * l1);  
    this.r2 = Math.floor(Math.random() * l2);  
  }

}
