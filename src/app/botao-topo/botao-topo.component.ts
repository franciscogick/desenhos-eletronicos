import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-botao-topo',
  templateUrl: './botao-topo.component.html',
  styleUrls: ['./botao-topo.component.css']
})
export class BotaoTopoComponent implements OnInit {

  hasScrolled = false;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private scrollService: ScrollService) { }

  ngOnInit(): void {
    this.scrollService.getPos().pipe(takeUntil(this.destroy$)).subscribe((pos)=>{
      this.hasScrolled = pos > 300;
    });
  }

  scrollTop():void {
    this.scrollService.scrollToTop();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
