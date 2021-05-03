import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-desenhos-eletronicos',
  templateUrl: './desenhos-eletronicos.component.html',
  styleUrls: ['./desenhos-eletronicos.component.css']
})
export class DesenhosEletronicosComponent implements OnInit {

  nodeId='102';

  constructor(private titleService: Title) {
    this.titleService.setTitle('Desenhos eletrônicos | Desenhos eletrônicos');
  }

  ngOnInit(): void {
    
  }

}
