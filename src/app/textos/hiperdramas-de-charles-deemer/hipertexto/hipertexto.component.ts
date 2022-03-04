import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ParagrafosService } from 'src/app/paragrafos.service';

@Component({
  selector: 'app-hipertexto',
  templateUrl: './hipertexto.component.html',
  styleUrls: ['./hipertexto.component.css']
})
export class HipertextoComponent implements OnInit {

  @ViewChild('innerEl', { read: ElementRef }) public innerEl: ElementRef<any>;

  constructor(private titleService: Title, private paragrafosService: ParagrafosService) { 
    this.titleService.setTitle('Dramaturgias digitais | Hiperdramas de Charles Deemer/Last song of Violeta Parra');
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.paragrafosService.addNumbers(this.innerEl);
  }
}
