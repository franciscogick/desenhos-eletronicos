import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ParagrafosService } from 'src/app/paragrafos.service';

@Component({
  selector: 'app-hiperdramas-de-charles-deemer',
  templateUrl: './hiperdramas-de-charles-deemer.component.html',
  styleUrls: ['./hiperdramas-de-charles-deemer.component.css']
})
export class HiperdramasDeCharlesDeemerComponent implements OnInit,AfterViewInit {

  nodeId='10411';

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
