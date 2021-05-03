import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SessionService } from 'src/app/session.service';

@Component({
  selector: 'app-last-song-of-violeta-parra',
  templateUrl: './last-song-of-violeta-parra.component.html',
  styleUrls: ['./last-song-of-violeta-parra.component.css']
})
export class LastSongOfVioletaParraComponent implements OnInit,OnDestroy {

  nodeId = '10411';

  sessionUser: string;

  destroy$: Subject<boolean> = new Subject<boolean>();
  
  constructor(private renderer: Renderer2, private sessionService: SessionService, private titleService: Title) {this.titleService.setTitle('Desenhos eletrônicos | Corpus → Last Song of Violeta Parra'); }

  ngOnInit(): void {
    this.sessionService.getUser().pipe(takeUntil(this.destroy$)).subscribe(user => this.sessionUser = user.name);
  }

  ngOnDestroy():void {
		this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
