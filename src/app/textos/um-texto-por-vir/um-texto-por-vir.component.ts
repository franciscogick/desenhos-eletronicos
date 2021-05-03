import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-um-texto-por-vir',
  templateUrl: './um-texto-por-vir.component.html',
  styleUrls: ['./um-texto-por-vir.component.css']
})
export class UmTextoPorVirComponent implements OnInit {

  nodeId = '106';

  constructor(private titleService: Title) { 
    this.titleService.setTitle('Desenhos eletrônicos | Um texto por vir');
  }

  ngOnInit(): void {
  }

}
