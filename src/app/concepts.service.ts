import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { Conceito } from './interfaces/conceito';

@Injectable({
  providedIn: 'root'
})
export class ConceptsService {

  constructor(private http: HttpClient) {}

  public getConceito(name:string):any {
    const url = `/api/conceito/${name}`;
    return this.http.get<any>(url); 
  }

  /*public getConceito(name:string):any {
    return this.conceitos.filter(it => it.name === name)
  }*/

}
