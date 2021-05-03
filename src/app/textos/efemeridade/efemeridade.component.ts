import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-efemeridade',
  templateUrl: './efemeridade.component.html',
  styleUrls: ['./efemeridade.component.css']
})
export class EfemeridadeComponent implements OnInit {

  nodeId='1021';

  constructor(private titleService: Title) { 
    this.titleService.setTitle('Desenhos eletrônicos | Efemeridade/obsolescência');
  }

  ngOnInit(): void {
  }

}
