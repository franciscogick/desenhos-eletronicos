import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OpenedTextsService } from '../../opened-texts.service';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit,AfterViewInit {

  @Input() src: string;
  @Input() container: string = null;

  progress: number;
  playing: boolean = false;

  audio: HTMLAudioElement = null;
  duration: number;
  elapsed: string;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private openedTextsService: OpenedTextsService) {}

  ngOnInit(): void {
    this.audio = new Audio('/assets/'+this.src);

    this.openedTextsService.getOpened().pipe(takeUntil(this.destroy$))
    .subscribe(o => {
      if (this.audio && this.container) {
        if (!o[this.container]) {
          this.stop();
        }
      }
    });
  }

  ngAfterViewInit():void {
    this.audio.addEventListener('timeupdate',()=>{
      this.progress = Math.floor(100 * (this.audio.currentTime / this.duration));
      this.elapsed = this.getElapsed(this.audio.currentTime,this.duration);
    },false);
    
    this.audio.addEventListener("canplaythrough", () => {
      this.duration = this.audio.duration;
      this.elapsed = this.getElapsed(0,this.duration);
    }, false);

    this.audio.addEventListener("ended", () => {
      this.audio.currentTime = 0;
      this.playing = false;
    }, false);
  }

  ngOnDestroy():void {
    this.audio.pause();
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  getElapsed(ct:number,d:number):string {
    let minutes = Math.floor((d - ct) / 60);
    let seconds = Math.floor((d - ct) - minutes * 60)+'';
    
    return minutes+':'+seconds.padStart(2,'0');
  }

  playPause():void {
    if (this.audio.paused || this.audio.ended) {
      this.audio.play();
      this.playing = true;
    } else {
      this.audio.pause();
      this.playing = false;
    }
  }

  stop():void {
    this.audio.pause();
    this.playing = false;
    this.audio.currentTime = 0;
  }

  handleEnded():void {
    this.playing = false;
  }

}
