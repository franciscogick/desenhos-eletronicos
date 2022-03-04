import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ParagrafosService } from 'src/app/paragrafos.service';

@Component({
  selector: 'app-dramaturgias-digitais',
  templateUrl: './dramaturgias-digitais.component.html',
  styleUrls: ['./dramaturgias-digitais.component.css']
})
export class DramaturgiasDigitaisComponent implements OnInit,AfterViewInit {

  nodeId='104';

  corpus: {link:string;nome:string}[] = [
    {link:'hiperdramas-de-charles-deemer', nome:'Hiperdramas de Charles Deemer'},
    {link:'transmission-a-dialogue', nome:'TRANS.MISSION [A.DIALOGUE]'},
    {link:'ive-seen-the-future-and-its-a-robot', nome:'I\'ve seen the future and it\'s a robot'},
  ];

  @ViewChild('innerEl', { read: ElementRef }) public innerEl: ElementRef<any>;

  constructor(private titleService: Title, private paragrafosService: ParagrafosService) { 
    this.titleService.setTitle('Dramaturgias digitais | Hiperdramas de Charles Deemer');
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.paragrafosService.addNumbers(this.innerEl);
  }


}
