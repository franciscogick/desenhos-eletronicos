import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ParagrafosService } from 'src/app/paragrafos.service';

@Component({
  selector: 'app-novas-grafias',
  templateUrl: './novas-grafias.component.html',
  styleUrls: ['./novas-grafias.component.css']
})
export class NovasGrafiasComponent implements OnInit,AfterViewInit {

  nodeId='103';

  @ViewChild('innerEl', { read: ElementRef }) public innerEl: ElementRef<any>;

  constructor(private titleService: Title, private paragrafosService: ParagrafosService) { 
    this.titleService.setTitle('Dramaturgias digitais | Epílogo');
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.paragrafosService.addNumbers(this.innerEl);
  }

}
