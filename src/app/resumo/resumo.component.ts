import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css']
})
export class ResumoComponent implements OnInit {

  constructor(private titleService: Title) { 
    this.titleService.setTitle('Dramaturgias digitais | resumo'); 
  }

  ngOnInit(): void {
  }

}
