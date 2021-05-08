import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit {

  @Input() id: string;
  @Input() titulo: string = null;

  url: SafeResourceUrl;
  playing = false;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.id + '?controls=1&showinfo=0&modestbranding=0&autoplay=1');
  }

  play() {
    this.playing = true;
  }

  stop() {
    this.playing = false;
  }

}
