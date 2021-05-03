import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodesService {

  private networkLoaded: BehaviorSubject<boolean>;
  

  public nodes: any[];
  public activeNode: string;

  constructor() {
    this.networkLoaded = new BehaviorSubject<boolean>(false);
  }

  public getNetworkState(): Observable<boolean> {
    return this.networkLoaded.asObservable();
  }
  public setNetworkState(state: boolean): void {
    this.networkLoaded.next(state);
  }
}
