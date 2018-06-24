import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material';
import { DRAWER_DATA, HOME, CAMERA, DASHBOARD } from './mobile-control.config';
import { Router } from '@angular/router';
export interface MenuData {
  device: string;
  content: { label: string, icon: string }[];
}

@Component({
  selector: 'app-mobile-control',
  templateUrl: './mobile-control.component.html',
  styleUrls: ['./mobile-control.component.css']
})
export class MobileControlComponent implements OnInit {
  @ViewChild(MatDrawer) sidenav: MatDrawer;
  public drawerList: MenuData[] = DRAWER_DATA;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public onNav(dashNav): void {
    switch (dashNav.label) {
      case 'Camera':
        this.router.navigate(['/', HOME, CAMERA]);
        break;

      case 'Contenu':
        this.router.navigate(['/', HOME, DASHBOARD]);
        break;
    }

    this.sidenav.toggle();
  }
}
