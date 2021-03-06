import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class InicioGuard implements CanActivate {
  
  subLogState: any;
  
  constructor(private sessionService: SessionService, private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | UrlTree {
      if (this.sessionService.hasUser()) {
        return true;
      } else {
        let reqUrl = state.url.split('#') 
        this.sessionService.redirectUrl.url = reqUrl[0];
        this.sessionService.redirectUrl.fragment = reqUrl[1];
        return this.router.navigate(['/inicio']);
      }
  }
}