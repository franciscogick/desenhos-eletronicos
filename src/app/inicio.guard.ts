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
        return this.router.parseUrl('/inicio');
      }
  }
}