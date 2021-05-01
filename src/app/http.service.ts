import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Node, Edge } from 'vis-network/peer/umd/vis-network';
import { ExtendedNode } from './interfaces/extended-node';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

	private nodes: ExtendedNode[];
	private edges: Edge[];

  constructor(private http: HttpClient) {
  }

  getNodes(): any {
		const url = `/api/nodes`;
		return this.http.get<any>(url).
			pipe(
				catchError(this.handleError<any>(`getNodes`))
	  );
  }

  getEdges(): any {
		const url = `/api/edges`;
		return this.http.get<any>(url).
			pipe(
				catchError(this.handleError<any>(`getEdges`))
	  );   
  }

  getTextoByName(name:string): any {
    const url = `/api/texto/${name}`;
		return this.http.get<any>(url).
			pipe(
				catchError(this.handleError<any>(`getTextoByName`))
	  );
  }

  getReferencias(): any {
    const url = `/api/referencias`;
		return this.http.get<any>(url).
			pipe(
				catchError(this.handleError<any>(`getReferencias`))
	  );
  }

  getReferenciaByName(name:string): any {
    const url = `/api/referencia/${name}`;
		return this.http.get<any>(url).
			pipe(
				catchError(this.handleError<any>(`getReferenciaByName`))
	  );
  }
  
  /**
	* Handle Http operation that failed.
	* Let the app continue.
	* @param operation - name of the operation that failed
	* @param result - optional value to return as the observable result
	*/
	private handleError<T> (operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {

			// TODO: send the error to remote logging infrastructure
			console.error(error); // log to console instead

			// TODO: better job of transforming error for user consumption
			console.log(`${operation} failed: ${error.message}`);

			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
	}
}
