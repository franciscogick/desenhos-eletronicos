import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  lexia: boolean;
  menuState: boolean;

  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit(): void {
    this.lexia = this.router.url.indexOf('lexia') > -1;
  }

  toggleMenu() {
    this.menuState = !this.menuState;
  }

  logOut():void {
    this.sessionService.unregisterUser();
    
    this.router.navigateByUrl('/inicio');
  }

}
