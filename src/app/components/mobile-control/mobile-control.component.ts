import { Component, OnInit } from '@angular/core';
export interface MenuData {
  device: string;
  content: { label: string, icon: string }[];
}
export const DRAWER_DATA = [
  {
    device: 'Browser',
    content: [
      {
        label: 'Contenu',
        icon: 'ballot'
      }, {
        label: 'Camera',
        icon: 'photo_camera'

      }, {
        label: 'Micro',
        icon: 'mic'

      }, {
        label: 'Stockage',
        icon: 'storage'
      }, {
        label: 'Notifications',
        icon: 'notifications'
      }, {
        label: 'Localisation',
        icon: 'place'
      }]
  }, {
    device: 'Mobile',
    content: [
      {
        label: 'Call',
        icon: 'call'
      }, {
        label: 'Battery',
        icon: 'battery'
      }, {
        label: 'Contacts',
        icon: 'contacts'
      }, {
        label: 'Cell Network',
        icon: 'signal_cellular_3_bar'
      }, {
        label: 'Wifi Network',
        icon: 'network_wifi'
      }, {
        label: 'GPS',
        icon: 'gps_fixed'
      }, {
        label: 'Call',
        icon: 'call'
      }
    ]
  }
];

@Component({
  selector: 'app-mobile-control',
  templateUrl: './mobile-control.component.html',
  styleUrls: ['./mobile-control.component.css']
})
export class MobileControlComponent implements OnInit {
  public drawerList: MenuData[] = DRAWER_DATA;

  constructor() { }

  ngOnInit() {
    console.log(this.drawerList);
  }

  toto(item) {
    console.log(item);
  }
}
