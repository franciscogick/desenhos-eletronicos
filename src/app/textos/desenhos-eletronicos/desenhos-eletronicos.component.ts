import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ParagrafosService } from 'src/app/paragrafos.service';

@Component({
  selector: 'app-desenhos-eletronicos',
  templateUrl: './desenhos-eletronicos.component.html',
  styleUrls: ['./desenhos-eletronicos.component.css']
})
export class DesenhosEletronicosComponent implements OnInit, AfterViewInit {

  nodeId='102';
  
  @ViewChild('innerEl', { read: ElementRef }) public innerEl: ElementRef<any>;

  constructor(private titleService: Title, private paragrafosService: ParagrafosService) {
    this.titleService.setTitle('Desenhos eletrônicos | Desenhos eletrônicos');
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.paragrafosService.addNumbers(this.innerEl);
  }
}
