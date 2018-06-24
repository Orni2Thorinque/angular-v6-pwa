import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-cell-network',
  templateUrl: './mobile-cell-network.component.html',
  styleUrls: ['./mobile-cell-network.component.css']
})
export class MobileCellNetworkComponent implements OnInit {
  private browser: any;
  public type: string;
  public _downlink: number;
  get downlink() {
    return this._downlink + ' Mb/s';
  }
  public _rtt: number;
  get rtt() {
    return this._rtt + ' milliseconds';
  }

  constructor() { }

  ngOnInit() {
    this.browser = navigator;
    this.type = this.browser.connection.effectiveType.toUpperCase();
    this._downlink = this.browser.connection.downlink.toString().toUpperCase();
    this._rtt = this.browser.connection.rtt;

    this.browser.connection.onchange = this.connectionChange.bind(this);
  }

  private connectionChange() {
    this.browser = navigator;
    this.type = this.browser.connection.effectiveType.toUpperCase();
    this._downlink = this.browser.connection.downlink.toUpperCase();
    this._rtt = this.browser.connection.rtt;
  }
}
