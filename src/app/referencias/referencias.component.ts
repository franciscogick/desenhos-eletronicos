import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HighlightService } from 'src/app/highlight.service';
import { HttpService } from 'src/app/http.service';
import { Referencia } from 'src/app/interfaces/referencia';
import { SessionService } from 'src/app/session.service';

@Component({
  selector: 'app-referencias',
  templateUrl: './referencias.component.html',
  styleUrls: ['./referencias.component.css']
})
export class ReferenciasComponent implements OnInit {

  referencias: Referencia[];
  citadas: Referencia[];
  consultadas: Referencia[];

  sessionUser: string;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private renderer: Renderer2, private highlightService: HighlightService, private sessionService: SessionService, private httpService: HttpService, private titleService: Title) { this.titleService.setTitle('Dramaturgias digitais | Referências'); }

  ngOnInit(): void {
    this.httpService.getReferencias().pipe(takeUntil(this.destroy$))
    .subscribe(referencias => {
      this.referencias = referencias.sort((a,b) => {
        let x,y = '';
        let n = [];

        if (a.author) {n = a.author[0].name.split(' '); x = n[n.length - 1]}
        else if (a.editor) {n = a.editor[0].name.split(' '); x = n[n.length - 1]}
        else if (a.site) {x = a.site}

        if (b.author) {n = b.author[0].name.split(' '); y = n[n.length - 1]}
        else if (b.editor) {n = b.editor[0].name.split(' '); y = n[n.length - 1]}
        else if (b.site) {y = b.site}

        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      });
      this.citadas = this.referencias.filter(r => r.cited);
      this.consultadas = this.referencias.filter(r => !r.cited);
      
    });
    this.sessionService.getUser().pipe(takeUntil(this.destroy$)).subscribe(user => {if (user) this.sessionUser = user.name});
  }
  
  ngOnDestroy():void {
		this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
