import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ParagrafosService } from 'src/app/paragrafos.service';

@Component({
  selector: 'app-dramaturgia-codigo',
  templateUrl: './dramaturgia-codigo.component.html',
  styleUrls: ['./dramaturgia-codigo.component.css']
})
export class DramaturgiaCodigoComponent implements OnInit, AfterViewInit {

  nodeId='1051';

  @ViewChild('innerEl', { read: ElementRef }) public innerEl: ElementRef<any>;

  constructor(private titleService: Title, private paragrafosService: ParagrafosService) { 
    this.titleService.setTitle('Dramaturgias digitais | Dramaturgia e código');}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.paragrafosService.addNumbers(this.innerEl);
  }
}
