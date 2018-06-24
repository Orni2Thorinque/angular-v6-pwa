import { Component, OnInit, ElementRef, AfterViewInit, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mobile-location',
  templateUrl: './mobile-location.component.html',
  styleUrls: ['./mobile-location.component.css']
})
export class MobileLocationComponent implements OnInit, AfterViewInit {
  @ViewChild('ref') elRef: ElementRef;

  private browser: Navigator;

  public lat = 0;
  public lng = 0;

  public mapHeight = 0;
  public mapWidth = 0;

  @HostListener('window:resize', ['$event']) onResize() {
    this.computeSizes();
  }

  constructor() { }

  ngOnInit() {
    this.browser = navigator;
  }

  ngAfterViewInit() {
    setTimeout(() => { this.computeSizes(); }, 300);
  }

  public locate(): void {
    if (this.browser && this.browser.geolocation) {
      navigator.geolocation.getCurrentPosition(this.locationCallback.bind(this));
    }
  }

  private locationCallback(position: Position) {
    const coordinates: Coordinates = position.coords;
    this.lat = coordinates.latitude;
    this.lng = coordinates.longitude;
  }

  private computeSizes(): void {
    this.mapHeight = this.elRef.nativeElement.clientHeight - 10;
    this.mapWidth = this.elRef.nativeElement.clientWidth - 10;
  }
}
