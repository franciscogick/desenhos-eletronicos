import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introducao',
  templateUrl: './introducao.component.html',
  styleUrls: ['./introducao.component.css']
})
export class IntroducaoComponent implements OnInit {

  lexias: {texto:string,link:string,name:string}[] = [
    {texto:'Em <b>Desenhos eletrônicos</b> procede-se a uma reflexão teórica sobre o campo da Literatura Eletrônica e sobre como a textualidade digital implica em transformações nas relações de leitura e escrita.',link:'desenhos-eletronicos',name:'Desenhos Eletrônicos'},
    {texto:'<b>Travessia</b> é um passeio pelo território da Literatura Eletrônica que mobiliza discussões acerca das tecnologias e estratégias de composição de textos digitais.',link:'travessia',name:'Travessia'},
    {texto:'Em <b>Duas entradas</b> apresentam-se duas possibilidades de aproximação entre Teatro e Literatura Eletrônica: (1) o teatro como metáfora cognitiva privilegiada para pensar o texto digital como representação e, em um movimento seguinte, como performance; (2) o texto dramatúrgico como textualidade digital, onde se caracteriza a categoria de texto dramatúrgico digital e procede-se a análise de um corpus de 4 textos digitais (encontrados ao longo da <b>Travessia</b>) relacionados à forma dramática ou criados com intensão de serem apropriados em um processo de criação ou performance.',link:'duas-entradas',name:'Duas Entradas'},
    {texto:'<b>Dramaturgia e Tecnologia</b> discute as relações entre a dramaturgia contemporânea e as novas tecnologias, abordando o conceito de dramaturgia e tentando perceber qual o lugar do texto dramatúrgico no teatro contemporâneo. É realizada análise de HIPERGAIVOTA, uma performance online compartilhada em tempo real, produzida a partir desta pequisa, como uma especulação sobre relações possíveis entre código-fonte e dramaturgia.',link:'dramaturgia-tecnologia',name:'Dramaturgia e tecnologia'},
    {texto:'<b>Um texto por vir</b> apresenta o processo de criação do texto dramatúrgico digital ainda sem título que é objeto desta pesquisa, apresentando e discutindo o texto e suas estratégias de composição.',link:'um-texto-por-vir',name:'Um texto por vir'},
  ]

  constructor() { }

  ngOnInit(): void {
    this.shuffle(this.lexias);
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

}
