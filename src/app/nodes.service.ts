import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NodesService {

  public nodes: any[];
  public activeNode: string;

  constructor() { }
}
