import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { shareReplay, takeUntil } from 'rxjs/operators';
import { User } from '../interfaces/user';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit,OnDestroy {

  user: User;
  flash: boolean;

  destroy$: Subject<boolean> = new Subject<boolean>();
  form: any;

  @ViewChild('f', { static: true }) f: NgForm;
  erro: boolean;

  constructor(private sessionService: SessionService, private router: Router, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.sessionService.getUser().pipe(takeUntil(this.destroy$)).subscribe(user => {
      if (user) {
        this.router.navigateByUrl('/capa');
      } else {
        let storedUser = JSON.parse(sessionStorage.getItem('rizomaUser'));

        //console.log(storedUser,sessionStorage.getItem('rizomaUser'))
        if (storedUser?.name) this.sessionService.registerUser(storedUser);
      }

      
    });

    this.form = this._formBuilder.group({
      name: ['', [Validators.required]],
    });
  }

  ngOnDestroy() {
		this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  onSubmit():void {
    const val = this.form.value;

   // console.log(val)

    if (val.name) {

      const data = {};
      data['name'] = val.name;

      this.sessionService.login(data).pipe(takeUntil(this.destroy$),shareReplay(1)).subscribe(
        res => {
          this.erro = false;
          this.router.navigateByUrl('/capa');
        },
        err => {
          this.erro = true;
          this.form.reset();
        }
      );
    }
  }

}
