import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dramaturgia-codigo',
  templateUrl: './dramaturgia-codigo.component.html',
  styleUrls: ['./dramaturgia-codigo.component.css']
})
export class DramaturgiaCodigoComponent implements OnInit {

  nodeId='1051';

  constructor(private titleService: Title) { 
    this.titleService.setTitle('Desenhos eletrônicos | Dramaturgia e código');}

  ngOnInit(): void {
  }

}
