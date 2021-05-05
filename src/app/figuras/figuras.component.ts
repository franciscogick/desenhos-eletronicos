import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HttpService } from '../http.service';
import { Figura } from '../interfaces/figura';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-figuras',
  templateUrl: './figuras.component.html',
  styleUrls: ['./figuras.component.css']
})
export class FigurasComponent implements OnInit {

  figuras: Figura[];

  sessionUser: string;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private sessionService: SessionService, private httpService: HttpService, private titleService: Title) { this.titleService.setTitle('Desenhos eletrônicos | Lista de figuras'); }

  ngOnInit(): void {
    this.httpService.getFiguras().pipe(takeUntil(this.destroy$))
    .subscribe(figuras => {
      this.figuras = figuras.sort((a,b) => (a.caption > b.caption) ? 1 : ((b.caption > a.caption) ? -1 : 0));
    });
    this.sessionService.getUser().pipe(takeUntil(this.destroy$)).subscribe(user => {if (user) this.sessionUser = user.name});
  }
  
  ngOnDestroy():void {
		this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
