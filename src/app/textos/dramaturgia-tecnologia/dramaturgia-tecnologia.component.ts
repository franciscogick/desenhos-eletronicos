import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dramaturgia-tecnologia',
  templateUrl: './dramaturgia-tecnologia.component.html',
  styleUrls: ['./dramaturgia-tecnologia.component.css']
})
export class DramaturgiaTecnologiaComponent implements OnInit {

  nodeId='105'

  constructor(private titleService: Title) {
    this.titleService.setTitle('Desenhos eletrônicos | Dramaturgia e tecnologia');
   }

  ngOnInit(): void {
  }

}
