import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-capa',
  templateUrl: './capa.component.html',
  styleUrls: ['./capa.component.css']
})
export class CapaComponent implements OnInit {

  leitor: string;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private sessionService: SessionService, private titleService: Title) {
    this.titleService.setTitle('Desenhos eletrônicos | capa'); 
  }

  ngOnInit(): void {
    this.sessionService.getUser().pipe(takeUntil(this.destroy$)).subscribe(user => {
      if (user) this.leitor = user.name;      
    });
  }

  ngOnDestroy() {
		this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
