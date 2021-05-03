import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-isso-que-te-escrevi',
  templateUrl: './isso-que-te-escrevi.component.html',
  styleUrls: ['./isso-que-te-escrevi.component.css']
})
export class IssoQueTeEscreviComponent implements OnInit {

  nodeId='1011';

  constructor(private titleService: Title) { 
    this.titleService.setTitle('Desenhos eletrônicos | Isso que te escrevi');
  }

  ngOnInit(): void {
  }

}
