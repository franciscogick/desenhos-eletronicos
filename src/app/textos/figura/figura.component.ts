import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HttpService } from 'src/app/http.service';
import { Figura } from 'src/app/interfaces/figura';

@Component({
  selector: 'figura',
  templateUrl: './figura.component.html',
  styleUrls: ['./figura.component.css']
})
export class FiguraComponent implements OnInit {

  loaded = false;

  @Input() name: string;
  /*@Input() src: string;
  @Input() legenda: string;
  @Input() fonte: string = null;*/

  figura: Figura;
  src: string;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getFiguraByName(this.name).pipe(takeUntil(this.destroy$))
    .subscribe(figura => {
      this.figura = figura;
      this.loadImage();
    });
  }

  ngOnDestroy():void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  private loadImage() {
    
    let img = new Image();

    img.onload = ()=>{
      this.loaded = true;
    }

    if (this.figura.type == 'lexia') {
      this.src = '/assets/imgs-lexias/'+this.figura.file;
      img.src = this.src;
    }
  }

}
