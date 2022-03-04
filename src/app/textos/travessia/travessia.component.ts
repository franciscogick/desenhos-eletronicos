import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ParagrafosService } from 'src/app/paragrafos.service';

@Component({
  selector: 'app-travessia',
  templateUrl: './travessia.component.html',
  styleUrls: ['./travessia.component.css']
})
export class TravessiaComponent implements OnInit, AfterViewInit {

  nodeId='103';

  @ViewChild('innerEl', { read: ElementRef }) public innerEl: ElementRef<any>;
  
  constructor(private titleService: Title, private paragrafosService: ParagrafosService) { this.titleService.setTitle('Dramaturgias digitais | Travessia');}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.paragrafosService.addNumbers(this.innerEl);
  }
}
