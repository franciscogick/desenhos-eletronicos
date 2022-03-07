import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ParagrafosService } from 'src/app/paragrafos.service';

@Component({
  selector: 'app-dramaturgias-digitais',
  templateUrl: './dramaturgias-digitais.component.html',
  styleUrls: ['./dramaturgias-digitais.component.css']
})
export class DramaturgiasDigitaisComponent implements OnInit,AfterViewInit,OnDestroy {

  nodeId='104';

  corpus: {link:string;nome:string}[] = [
    {link:'hiperdramas-de-charles-deemer', nome:'Hiperdramas de Charles Deemer'},
    {link:'transmission-a-dialogue', nome:'TRANS.MISSION [A.DIALOGUE]'},
    {link:'ive-seen-the-future-and-its-a-robot', nome:'I\'ve seen the future and it\'s a robot'},
  ];

  destroy$: Subject<boolean> = new Subject<boolean>();

  @ViewChild('innerEl', { read: ElementRef }) public innerEl: ElementRef<any>;

  constructor(private titleService: Title, private paragrafosService: ParagrafosService) { 
    this.titleService.setTitle('Dramaturgias digitais | Hiperdramas de Charles Deemer');
  }

  ngOnInit(): void {
    this.shuffle(this.corpus);
    interval(5000).pipe(takeUntil(this.destroy$))
    .subscribe(() => this.shuffle(this.corpus));
  }

  ngAfterViewInit(): void {
    this.paragrafosService.addNumbers(this.innerEl);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
