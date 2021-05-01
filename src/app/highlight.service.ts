import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Highlight } from './interfaces/highlight';

@Injectable({
  providedIn: 'root'
})
export class HighlightService {

  private highlights: BehaviorSubject<Highlight[]>;
  private filteredHighlights: BehaviorSubject<Highlight[]>;

  constructor() {

    this.highlights = new BehaviorSubject<Highlight[]>([
      /*{
          "id": 1,
          "type": "highlight",
          "start": 43,
          "end": 51,
          "text": "elit-teatro",
          "containerElementId": "texto-inner-elit-teatro",
          "user": "Francisco Gick"
      },
      {
          "id": 2,
          "type": "highlight",
          "start": 58,
          "end": 66,
          "text": "elit-teatro",
          "containerElementId": "texto-inner-elit-teatro",
          "user": "Francisco Gick"
      },
      {
          "id": 3,
          "type": "highlight",
          "start": 74,
          "end": 83,
          "text": "elit-teatro",
          "containerElementId": "texto-inner-elit-teatro",
          "user": "Francisco Gick"
      },
      {
          "id": 4,
          "type": "highlight",
          "start": 93,
          "end": 100,
          "text": "elit-teatro",
          "containerElementId": "texto-inner-elit-teatro",
          "user": "Francisco Gick"
      },
      {
          "id": 5,
          "type": "highlight",
          "start": 106,
          "end": 116,
          "text": "elit-teatro",
          "containerElementId": "texto-inner-elit-teatro",
          "user": "Francisco Gick"
      },
      {
          "id": 6,
          "type": "highlight",
          "start": 200,
          "end": 209,
          "text": "elit-teatro",
          "containerElementId": "texto-inner-elit-teatro",
          "user": "Francisco Gick"
      },
      {
          "id": 7,
          "type": "highlight",
          "start": 223,
          "end": 234,
          "text": "elit-teatro",
          "containerElementId": "texto-inner-elit-teatro",
          "user": "Francisco Gick"
      },
      {
          "id": 8,
          "type": "highlight",
          "start": 244,
          "end": 251,
          "text": "elit-teatro",
          "containerElementId": "texto-inner-elit-teatro",
          "user": "Francisco Gick"
      },
      {
          "id": 9,
          "type": "highlight",
          "start": 1323,
          "end": 1407,
          "text": "elit-teatro",
          "containerElementId": "texto-inner-elit-teatro",
          "user": "Francisco Gick"
      },
      {
          "id": 10,
          "type": "highlight",
          "start": 2306,
          "end": 2391,
          "text": "elit-teatro",
          "containerElementId": "texto-inner-elit-teatro",
          "user": "Francisco Gick"
      },
      {
          "id": 11,
          "type": "highlight",
          "start": 2806,
          "end": 2891,
          "text": "elit-teatro",
          "containerElementId": "texto-inner-elit-teatro",
          "user": "Francisco Gick"
      }*/
    ]);

    this.filteredHighlights = new BehaviorSubject<Highlight[]>([]);
  }

  public removeById(id:number): void {
    let highlightsArr = this.highlights.value;
    let index = highlightsArr.findIndex(i => i.id == id);
    
    if (index > -1) {
      highlightsArr.splice(index, 1);
    }
    this.highlights.next(highlightsArr);

    // atualiza lista na sessão;
    sessionStorage.setItem('highlights',JSON.stringify(highlightsArr));
  }

  public remove(highlight:Highlight): void {
    let highlightsArr = this.highlights.value;
    let index = highlightsArr.indexOf(highlight);
    
    if (index > -1) {
      highlightsArr.splice(index, 1);
    }
    this.highlights.next(highlightsArr);

    // atualiza lista na sessão;
    sessionStorage.setItem('highlights',JSON.stringify(highlightsArr));
  }

  public insert(highlight:Highlight): void {
    let highlightsArr = this.highlights.value;
    //highlight.id = Math.floor(Math.random()*10000);
    highlightsArr.push(highlight);
    this.highlights.next(highlightsArr);

    console.log(this.highlights.value)

    // atualiza lista na sessão;
    sessionStorage.setItem('highlights',JSON.stringify(highlightsArr));
  }

  public getHighlights(text:string,user:string): Observable<Highlight[]> {

    this.filteredHighlights.next(this.highlights.value.filter((i)=>{return i.text == text && i.user == user}));

    console.log(text,user,this.filteredHighlights.value)

    return this.filteredHighlights.asObservable();
  }

}
