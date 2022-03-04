import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ParagrafosService } from 'src/app/paragrafos.service';

@Component({
  selector: 'app-ive-seen-the-future-and-its-a-robot',
  templateUrl: './ive-seen-the-future-and-its-a-robot.component.html',
  styleUrls: ['./ive-seen-the-future-and-its-a-robot.component.css']
})
export class IveSeenTheFutureAndItsARobotComponent implements OnInit {

  nodeId='10414';

  @ViewChild('innerEl', { read: ElementRef }) public innerEl: ElementRef<any>;

  constructor(private titleService: Title, private paragrafosService: ParagrafosService) { 
    this.titleService.setTitle('Dramaturgias digitais | I\'e seen the future and it\'s a robot');
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.paragrafosService.addNumbers(this.innerEl);
  }

}
