import { Component, OnInit } from '@angular/core';
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

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.sessionService.getUser().pipe(takeUntil(this.destroy$)).subscribe(user => {
      this.leitor = user.name;      
    });
  }

  ngOnDestroy() {
		this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
