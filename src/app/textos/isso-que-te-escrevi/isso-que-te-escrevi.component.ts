import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ParagrafosService } from 'src/app/paragrafos.service';

@Component({
  selector: 'app-isso-que-te-escrevi',
  templateUrl: './isso-que-te-escrevi.component.html',
  styleUrls: ['./isso-que-te-escrevi.component.css']
})
export class IssoQueTeEscreviComponent implements OnInit, AfterViewInit {

  nodeId='1011';

  @ViewChild('innerEl', { read: ElementRef }) public innerEl: ElementRef<any>;

  constructor(private titleService: Title, private paragrafosService: ParagrafosService) { 
    this.titleService.setTitle('Dramaturgias digitais | Isso que te escrevi');
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.paragrafosService.addNumbers(this.innerEl);
  }
}
