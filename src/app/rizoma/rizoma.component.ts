import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from '../interfaces/user';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-rizoma',
  templateUrl: './rizoma.component.html',
  styleUrls: ['./rizoma.component.css']
})
export class RizomaComponent implements OnInit {

  destroy$: Subject<boolean> = new Subject<boolean>();

  user: User;

  // @ViewChild('video',{static:false}) video:ElementRef;


  constructor(private sessionService: SessionService, private router: Router, private titleService: Title) {
    this.titleService.setTitle('Dramaturgias digitais | rizoma');  
  }

  ngOnInit(): void {
    this.sessionService.getUser().pipe(takeUntil(this.destroy$)).subscribe(user => {this.user = user});

    //this.startWebCam();
  }

  ngOnDestroy() {
		this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  logOut():void {
    this.sessionService.unregisterUser(); 
    this.router.navigateByUrl('/inicio');
  }


  // startWebCam():void {
  //   if (navigator.mediaDevices.getUserMedia) {
  //   navigator.mediaDevices.getUserMedia({ video: true })
  //   .then(stream => this.video.nativeElement.srcObject = stream).catch(error => console.log(error));
  //   }
  // }
  
  // stopWebCam():void {
  //   let stream = this.video.nativeElement.srcObject;
  //   let tracks = stream.getTracks();
  //   tracks.forEach(track => track.stop());
  //   this.video.nativeElement.srcObject = null;
  // }
 

}
