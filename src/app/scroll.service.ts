import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { BehaviorSubject, fromEvent, Observable, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScrollService implements OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();

  private pos: BehaviorSubject<number>;
  private winHeight: BehaviorSubject<number>;

  constructor(private activatedRoute: ActivatedRoute, private viewportScroller: ViewportScroller) {
    this.pos = new BehaviorSubject<number>(0);
    this.winHeight = new BehaviorSubject<number>(0);
    
    fromEvent(window, 'scroll')
      .pipe(debounceTime(5), takeUntil(this.destroy$))
      .subscribe(() => {
        const s = this.viewportScroller.getScrollPosition();
        this.setPos(s[1]);
      });

    const h = window.innerHeight;
    this.setWinHeight(h);

    fromEvent(window, 'resize')
      .pipe(debounceTime(5), takeUntil(this.destroy$))
      .subscribe(() => {
        const h = window.innerHeight;
        this.setWinHeight(h);
      });
  }

  public getPos(): Observable<number> {
    return this.pos.asObservable();
  }
  public setPos(val: number): void {
    this.pos.next(val);
  }

  public getWinHeight(): Observable<number> {
    return this.winHeight.asObservable();
  }
  public setWinHeight(val: number): void {
    this.winHeight.next(val);
  }

  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0])
  }

  scrollToAnchor(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}


