import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private user: BehaviorSubject<User>;

  constructor(private httpClient: HttpClient) { 
    this.user = new BehaviorSubject<User>(null);
  }

  public hasUser():boolean {
    return !!this.user.value;
  }

  public getUser():Observable<User> {
    return this.user.asObservable();
  }

  public registerUser(user:User):void {
    //console.log('register',user)
    
    this.user.next(user);
    
    // atualiza usuário na sessão;
    sessionStorage.setItem('rizomaUser',JSON.stringify(this.user.value));

    //console.log(sessionStorage.getItem('rizomaUser'));
  }

  public unregisterUser():void {
    this.user.next(null);

    // remove usuário da sessão;
    sessionStorage.removeItem('rizomaUser');
  }

  login(data) {
    return this.httpClient.post<any>(`/api/login`, data).pipe(tap(res => this.registerUser({name: res.name})));
  }
}
