import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Figura } from '../interfaces/figura';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GaleriaComponent implements OnInit {

  @Input() figuras: Figura[];
  @Input() col: number = 2;

  __dir = '/assets/imgs-lexias/';

  activeFigura: number;
  
  showLightbox = false;

  list = false;

  constructor() { }

  ngOnInit() {
  }

  setList(state: boolean):void {
    this.list = state;
  }

  dismiss() {
    this.showLightbox = false;
  }

  showFigura(n) {
    if (n > this.figuras.length - 1) {
      this.activeFigura = 0;
    } else if (n < 0) {
      this.activeFigura = this.figuras.length - 1;
    } else {
      this.activeFigura = n;
    }
    this.showLightbox = true;
  }

  next() {
    this.showFigura(this.activeFigura + 1);
  }

  prev() {
    this.showFigura(this.activeFigura - 1);
  }
}
