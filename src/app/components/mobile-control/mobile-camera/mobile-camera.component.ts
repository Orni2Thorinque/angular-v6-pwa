import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mobile-camera',
  templateUrl: './mobile-camera.component.html',
  styleUrls: ['./mobile-camera.component.css']
})
export class MobileCameraComponent implements OnInit {
  @ViewChild('videoElement') videoElement: any;
  private video: any;
  private started = false;
  public displayControls = true;
  public playing = false;

  constructor() { }

  ngOnInit() {
    this.video = this.videoElement.nativeElement;
    this.video.controls = this.displayControls;
  }

  public pause() {
    this.video.pause();
    this.playing = false;
  }

  public play() {
    if (!this.started) {
      this.initCamera({ video: true, audio: false });
      this.started = true;
    }
    this.video.play();
    this.playing = true;
  }

  public controls() {
    this.displayControls = !this.displayControls;
    this.video.controls = this.displayControls;
  }

  private initCamera(config: any) {
    const browser = <any>navigator;

    browser.getUserMedia = (browser.getUserMedia ||
      browser.webkitGetUserMedia ||
      browser.mozGetUserMedia ||
      browser.msGetUserMedia);

    browser.mediaDevices.getUserMedia(config).then(stream => {
      this.video.src = window.URL.createObjectURL(stream);
    });
  }
}
