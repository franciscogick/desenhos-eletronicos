import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ParagrafosService } from 'src/app/paragrafos.service';

@Component({
  selector: 'app-dramaturgia-tecnologia',
  templateUrl: './dramaturgia-tecnologia.component.html',
  styleUrls: ['./dramaturgia-tecnologia.component.css']
})
export class DramaturgiaTecnologiaComponent implements OnInit, AfterViewInit {

  nodeId='105'

  @ViewChild('innerEl', { read: ElementRef }) public innerEl: ElementRef<any>;

  constructor(private titleService: Title, private paragrafosService: ParagrafosService) {
    this.titleService.setTitle('Dramaturgias digitais | Dramaturgia e tecnologia');
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.paragrafosService.addNumbers(this.innerEl);
  }
}
