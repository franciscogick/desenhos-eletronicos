import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.component.html',
  styleUrls: ['./abstract.component.css']
})
export class AbstractComponent implements OnInit {

  constructor(private titleService: Title) { 
    this.titleService.setTitle('Dramaturgias digitais | abstract'); 
  }

  ngOnInit(): void {
  }

}
