import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ParagrafosService } from 'src/app/paragrafos.service';
import { SessionService } from 'src/app/session.service';

@Component({
  selector: 'app-last-song-of-violeta-parra',
  templateUrl: './last-song-of-violeta-parra.component.html',
  styleUrls: ['./last-song-of-violeta-parra.component.css']
})
export class LastSongOfVioletaParraComponent implements OnInit,OnDestroy, AfterViewInit {

  nodeId = '10411';

  sessionUser: string;

  destroy$: Subject<boolean> = new Subject<boolean>();
  
  @ViewChild('innerEl', { read: ElementRef }) public innerEl: ElementRef<any>;

  constructor(private renderer: Renderer2, private sessionService: SessionService, private titleService: Title, private paragrafosService: ParagrafosService) {this.titleService.setTitle('Desenhos eletrônicos | Corpus → Last Song of Violeta Parra'); }

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
