import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ParagrafosService } from 'src/app/paragrafos.service';

@Component({
  selector: 'app-a-pedra-de-euripedes',
  templateUrl: './a-pedra-de-euripedes.component.html',
  styleUrls: ['./a-pedra-de-euripedes.component.css']
})
export class APedraDeEuripedesComponent implements OnInit {

  nodeId='102';

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
