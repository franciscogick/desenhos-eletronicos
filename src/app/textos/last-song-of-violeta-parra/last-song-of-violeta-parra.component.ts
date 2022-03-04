import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ParagrafosService } from 'src/app/paragrafos.service';

@Component({
  selector: 'app-last-song-of-violeta-parra',
  templateUrl: './last-song-of-violeta-parra.component.html',
  styleUrls: ['./last-song-of-violeta-parra.component.css']
})
export class LastSongOfVioletaParraComponent implements OnInit,AfterViewInit {

  nodeId = '10411';
  
  @ViewChild('innerEl', { read: ElementRef }) public innerEl: ElementRef<any>;

  constructor(private titleService: Title, private paragrafosService: ParagrafosService) {this.titleService.setTitle('Desenhos eletrônicos | Corpus → Last Song of Violeta Parra'); }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.paragrafosService.addNumbers(this.innerEl);
  }

}
