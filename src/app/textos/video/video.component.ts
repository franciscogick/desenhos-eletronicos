import { Component, OnInit, Input, ViewChild, AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OpenedTextsService } from '../../opened-texts.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit,AfterViewInit,OnDestroy {

  @Input() src: string;
  @Input() container: string = null;

  @ViewChild('video',{static:false}) video:ElementRef<HTMLVideoElement>;

  destroy$: Subject<boolean> = new Subject<boolean>();

  intervalVolFadeUp: any;
  intervalVolFadeDown: any;

  constructor(private openedTextsService: OpenedTextsService) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit():void {
    if (!this.container) {
      this.video.nativeElement.volume = 0;
      this.video.nativeElement.play();
    }

    this.openedTextsService.getOpened().pipe(takeUntil(this.destroy$))
    .subscribe(o => {
      if (this.video && this.container) {
        if (o[this.container]) {
          this.video.nativeElement.volume = 0;
          this.video.nativeElement.play();
        } else {
          this.stop();
        }
      }
    });
  }

  ngOnDestroy():void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  handleMouseOver():void {
    this.volFadeUp();
  }

  handleMouseOut():void {
    this.volFadeDown();
  }

  volFadeUp():void {
    clearInterval(this.intervalVolFadeDown);
    this.intervalVolFadeUp = setInterval(() => {
      if (this.video.nativeElement.volume < 1) {
        if (this.video.nativeElement.volume + .1 > 1) {
          this.video.nativeElement.volume = 1;
          clearInterval(this.intervalVolFadeUp);
        } else {
          this.video.nativeElement.volume += .1;
        }
      } else {
        clearInterval(this.intervalVolFadeUp);
      }
    }, 100);
  }

  volFadeDown():void {
    clearInterval(this.intervalVolFadeUp);
    this.intervalVolFadeDown = setInterval(() => {
      if (this.video.nativeElement.volume > 0) {
        if (this.video.nativeElement.volume - .1 < 0) {
          this.video.nativeElement.volume = 0;
          clearInterval(this.intervalVolFadeDown);
        } else {
          this.video.nativeElement.volume -= .1;
        }
      } else {
        clearInterval(this.intervalVolFadeDown);
      }
    }, 100);
  }

  stop():void {
    this.video.nativeElement.pause();
    this.video.nativeElement.currentTime = 0;
  }

}
