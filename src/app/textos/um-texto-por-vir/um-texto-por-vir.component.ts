import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ParagrafosService } from 'src/app/paragrafos.service';

@Component({
  selector: 'app-um-texto-por-vir',
  templateUrl: './um-texto-por-vir.component.html',
  styleUrls: ['./um-texto-por-vir.component.css']
})
export class UmTextoPorVirComponent implements OnInit, AfterViewInit {

  nodeId = '106';

  @ViewChild('innerEl', { read: ElementRef }) public innerEl: ElementRef<any>;

  constructor(private titleService: Title, private paragrafosService: ParagrafosService) { 
    this.titleService.setTitle('Desenhos eletrônicos | Um texto por vir');
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.paragrafosService.addNumbers(this.innerEl);
  }
}
