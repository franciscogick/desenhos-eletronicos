import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(private activatedRoute: ActivatedRoute, private viewportScroller: ViewportScroller) { }

  scroll() {
    this.activatedRoute.fragment.subscribe((fragment: string) => {
      if (fragment) {
        this.scrollToAnchor(fragment)
      } else {
        this.scrollToTop();
      }
    });
  }

  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0])
  }

  scrollToAnchor(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}


