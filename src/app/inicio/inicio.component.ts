import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
export class InicioComponent implements OnInit,AfterViewInit,OnDestroy {

  user: User;
  flash: boolean;

  destroy$: Subject<boolean> = new Subject<boolean>();
  form: any;

  @ViewChild('f', { static: true }) f: NgForm;
  erro: boolean;

  constructor(private sessionService: SessionService, private router: Router, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      name: ['', [Validators.required,Validators.minLength(3)]],
    });
  }

  ngAfterViewInit():void {
    console.log(this.sessionService.redirectUrl);
    this.sessionService.getUser().pipe(takeUntil(this.destroy$)).subscribe(user => {
      if (user) {
        this.router.navigate([this.sessionService.redirectUrl.url],{fragment:this.sessionService.redirectUrl.fragment});
        this.sessionService.redirectUrl.url = '/capa';
        this.sessionService.redirectUrl.fragment = null;
      } else {
        let storedUser = JSON.parse(sessionStorage.getItem('rizomaUser'));

        //console.log(storedUser,sessionStorage.getItem('rizomaUser'))
        if (storedUser?.name) this.sessionService.registerUser(storedUser);
      }
    });
  }

  ngOnDestroy() {
		this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  handleKey(event: any) { 
    if (event.keyCode === 13) {
      this.onSubmit();
    }
  }

  onSubmit():void {
    const val = this.form.value;

   // console.log(val)

    if (val.name && val.name.length > 2) {

      const data = {};
      data['name'] = val.name;

      this.sessionService.login(data).pipe(takeUntil(this.destroy$),shareReplay(1)).subscribe(
        res => {
          this.erro = false;
        },
        err => {
          this.erro = true;
          this.form.reset();
        }
      );
    }
  }

}
