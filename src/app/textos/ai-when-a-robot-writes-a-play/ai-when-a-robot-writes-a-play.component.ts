import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HighlightService } from 'src/app/highlight.service';
import { SessionService } from 'src/app/session.service';

@Component({
  selector: 'app-ai-when-a-robot-writes-a-play',
  templateUrl: './ai-when-a-robot-writes-a-play.component.html',
  styleUrls: ['./ai-when-a-robot-writes-a-play.component.css']
})
export class AiWhenARobotWritesAPlayComponent implements OnInit,OnDestroy {

  nodeId = '10414';

  sessionUser: string;

  destroy$: Subject<boolean> = new Subject<boolean>();
  
  constructor(private renderer: Renderer2, private highlightService: HighlightService, private sessionService: SessionService, private titleService: Title) { 
    this.titleService.setTitle('Desenhos eletrônicos | Corpus → AI: when a robot writes a play'); 
  }

  ngOnInit(): void {
    this.sessionService.getUser().pipe(takeUntil(this.destroy$)).subscribe(user => this.sessionUser = user.name);
  }

  ngOnDestroy():void {
		this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
