import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ParagrafosService } from 'src/app/paragrafos.service';

@Component({
  selector: 'app-transmission-a-dialogue',
  templateUrl: './transmission-a-dialogue.component.html',
  styleUrls: ['./transmission-a-dialogue.component.css']
})
export class TransmissionADialogueComponent implements OnInit,AfterViewInit {

  nodeId='10413';
  
  @ViewChild('innerEl', { read: ElementRef }) public innerEl: ElementRef<any>;

  constructor(private titleService: Title, private paragrafosService: ParagrafosService) { this.titleService.setTitle('Dramaturgias digitais | TRANS.MISSION [A.DIALOGUE]');}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.paragrafosService.addNumbers(this.innerEl);
  }

}
