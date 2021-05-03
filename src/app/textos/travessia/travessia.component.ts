import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-travessia',
  templateUrl: './travessia.component.html',
  styleUrls: ['./travessia.component.css']
})
export class TravessiaComponent implements OnInit {

  nodeId='103';

  constructor(private titleService: Title) { this.titleService.setTitle('Desenhos eletrônicos | Travessia');}

  ngOnInit(): void {
  }

}
