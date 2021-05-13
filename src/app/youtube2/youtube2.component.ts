import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { takeUntil,debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-youtube2',
  templateUrl: './youtube2.component.html',
  styleUrls: ['./youtube2.component.css']
})
export class Youtube2Component implements OnInit {

  @Input() id: string;
  @Input() controls: number = 1;
  
  @Output() endedEvt = new EventEmitter();
  @Output() canplayEvt = new EventEmitter();

  url: SafeResourceUrl;
  playing = false;
  public YT: any;
  public video: any;
  public player: any;
  public reframed: Boolean = false;
  state: boolean;

  destroy$: Subject<boolean> = new Subject<boolean>();
  isPausedBySincronous: boolean;
  isPaused: boolean;
  canplay: boolean;
  
  constructor(public sanitizer: DomSanitizer) { }

  /* 1. Some required variables which will be used by YT API*/

  isRestricted = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  /* 2. Initialize method for YT IFrame API */
  init() {
    // Return if Player is already created
    if (window['YT']) {
      this.startVideo();
      return;
    }

    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    /* 3. startVideo() will create an <iframe> (and YouTube player) after the API code downloads. */
    window['onYouTubeIframeAPIReady'] = () => this.startVideo();
  }

  ngOnInit() {
    this.video = this.id;

    this.init();

    
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  startVideo() {
    this.reframed = false;
    this.player = new window['YT'].Player('player', {
      videoId: this.video,
      width: '100%',
      height: '100%',
      playerVars: {
        autoplay: 1,
        modestbranding: 1,
        controls: this.controls,
        disablekb: 1,
        rel: 0,
        showinfo: 0,
        fs: 1,
        playsinline: 1
      },
      events: {
        'onStateChange': this.onPlayerStateChange.bind(this),
        'onError': this.onPlayerError.bind(this),
        'onReady': this.onPlayerReady.bind(this),
      }
    });
  }

  /* 4. It will be called when the Video Player is ready */
  onPlayerReady(event) {

    this.canplay = true;

    if (this.state) {
      if (this.isRestricted) {
        
        event.target.playVideo();
      } else {
        event.target.playVideo();
      }
    } else {
      event.target.playVideo();
    }

    this.canplayEvt.emit(null)
    
  }

  /* 5. API will call this function when Player State changes like PLAYING, PAUSED, ENDED */
  onPlayerStateChange(event) {
    console.log(event)
    switch (event.data) {
      case window['YT'].PlayerState.PLAYING:
        if (this.cleanTime() == 0) {
          console.log('started ' + this.cleanTime());
        } else {
          console.log('playing ' + this.cleanTime())
        };
        break;
      case window['YT'].PlayerState.PAUSED:
        if (this.player.getDuration() - this.player.getCurrentTime() != 0) {
          console.log('paused' + ' @ ' + this.cleanTime());
        };
        this.isPaused = true;
        break;
      case window['YT'].PlayerState.ENDED:
        console.log('ended ');
        this.endedEvt.emit(null)
        break;
    };
  };

  cleanTime() {
    return Math.round(this.player.getCurrentTime())
  };

  onPlayerError(event) {
    switch (event.data) {
      case 2:
        console.log('' + this.video)
        break;
      case 100:
        break;
      case 101 || 150:
        break;
    };
  };

  play() {
    this.playing = true;
  }

  stop() {
    this.playing = false;
  }


}
