import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ParagrafosService } from 'src/app/paragrafos.service';
import { SessionService } from 'src/app/session.service';

@Component({
  selector: 'app-ai-when-a-robot-writes-a-play',
  templateUrl: './ai-when-a-robot-writes-a-play.component.html',
  styleUrls: ['./ai-when-a-robot-writes-a-play.component.css']
})
export class AiWhenARobotWritesAPlayComponent implements OnInit, AfterViewInit, OnDestroy {

  nodeId = '10414';

  sessionUser: string;

  destroy$: Subject<boolean> = new Subject<boolean>();

  @ViewChild('innerEl', { read: ElementRef }) public innerEl: ElementRef<any>;
  
  constructor(private sessionService: SessionService, private titleService: Title, private paragrafosService: ParagrafosService) { 
    this.titleService.setTitle('Desenhos eletrônicos | Corpus → AI: when a robot writes a play'); 
  }

  ngOnInit(): void {
    this.sessionService.getUser().pipe(takeUntil(this.destroy$)).subscribe(user => this.sessionUser = user.name);
  }

  ngAfterViewInit(): void {
    this.paragrafosService.addNumbers(this.innerEl);
  }

  ngOnDestroy():void {
		this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
