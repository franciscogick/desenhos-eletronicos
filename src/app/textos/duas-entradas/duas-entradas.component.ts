import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SessionService } from 'src/app/session.service';

@Component({
  selector: 'app-duas-entradas',
  templateUrl: './duas-entradas.component.html',
  styleUrls: ['./duas-entradas.component.css']
})
export class DuasEntradasComponent implements OnInit,OnDestroy {
  
  nodeId = '104';

  sessionUser: string;

  destroy$: Subject<boolean> = new Subject<boolean>();

  corpus: {link:string;nome:string}[] = [
    {link:'last-song-of-violeta-parra', nome:'The Last Song of Violeta Parra'},
    {link:'escuro', nome:'Escuro'},
    {link:'transmission-a-dialogue', nome:'TRANS.MISSION [A.DIALOGUE]'},
    {link:'ai-when-a-robot-writes-a-play', nome:'AI: when a robot writes a play'},
    //{link:'common-medications-in-psychiatry', nome:'Common Medications in Psychiatry'},
    //{link:'canticle', nome:'Canticle'},
  ];

  constructor(private renderer: Renderer2, private sessionService: SessionService, private titleService: Title) {
    this.titleService.setTitle('Desenhos eletrônicos | Duas entradas');
  }

  ngOnInit(): void {
    this.sessionService.getUser().pipe(takeUntil(this.destroy$)).subscribe(user => {if (user) this.sessionUser = user.name});
  }

  ngOnDestroy():void {
		this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
