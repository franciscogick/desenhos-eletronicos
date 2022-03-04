import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ParagrafosService } from 'src/app/paragrafos.service';

@Component({
  selector: 'app-last-song-of-violeta-parra',
  templateUrl: './last-song-of-violeta-parra.component.html',
  styleUrls: ['./last-song-of-violeta-parra.component.css']
})
export class LastSongOfVioletaParraComponent implements OnInit,AfterViewInit {

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
