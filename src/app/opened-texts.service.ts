import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenedTextsService {

  opened: BehaviorSubject<any>;

  constructor() {
    this.opened = new BehaviorSubject<any>({
      texto1: false,
      texto2: false,
      texto3: false,
      texto4: false,
      texto5: false
    });
  }

  setOpenedState(texto,state):void {
    let opened = this.opened.value;
    opened[texto] = state;
    this.opened.next(opened);
  }

  getOpened():Observable<any> {
    return this.opened.asObservable();
  }
}
