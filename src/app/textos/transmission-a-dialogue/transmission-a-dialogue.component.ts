import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SessionService } from 'src/app/session.service';

@Component({
  selector: 'app-transmission-a-dialogue',
  templateUrl: './transmission-a-dialogue.component.html',
  styleUrls: ['./transmission-a-dialogue.component.css']
})
export class TransmissionADialogueComponent implements OnInit,OnDestroy {

  nodeId='10413';

  sessionUser: string;

  destroy$: Subject<boolean> = new Subject<boolean>();
  
  constructor(private renderer: Renderer2, private sessionService: SessionService, private titleService: Title) { this.titleService.setTitle('Desenhos eletrônicos | Corpus → TRANS.MISSION [A.DIALOGUE]');}

  ngOnInit(): void {
    this.sessionService.getUser().pipe(takeUntil(this.destroy$)).subscribe(user => this.sessionUser = user.name);
  }

  ngOnDestroy():void {
		this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
