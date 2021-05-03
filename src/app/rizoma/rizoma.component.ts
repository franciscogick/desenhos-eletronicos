import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from '../interfaces/user';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-rizoma',
  templateUrl: './rizoma.component.html',
  styleUrls: ['./rizoma.component.css']
})
export class RizomaComponent implements OnInit {

  destroy$: Subject<boolean> = new Subject<boolean>();

  user: User;

  constructor(private sessionService: SessionService, private router: Router, private titleService: Title) {
    this.titleService.setTitle('Desenhos eletrônicos | rizoma');  
  }

  ngOnInit(): void {
    this.sessionService.getUser().pipe(takeUntil(this.destroy$)).subscribe(user => {this.user = user});
  }

  ngOnDestroy() {
		this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  logOut():void {
    this.sessionService.unregisterUser();
    
    this.router.navigateByUrl('/inicio');
  }

}
