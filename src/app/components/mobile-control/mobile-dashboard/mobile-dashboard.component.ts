import { Component, OnInit } from '@angular/core';
import { DRAWER_DATA, HOME, CAMERA, DASHBOARD, PICTURE, LOCATION, CELL_NETWORK } from '../mobile-control.config';
import { MenuData } from '../mobile-control.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-dashboard',
  templateUrl: './mobile-dashboard.component.html',
  styleUrls: ['./mobile-dashboard.component.css']
})
export class MobileDashboardComponent implements OnInit {
  public drawerList: MenuData[] = DRAWER_DATA;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public onNavTo(dashNav: { label: string, icon: string }): void {
    switch (dashNav.label) {
      case 'Camera':
        this.router.navigate(['/', HOME, CAMERA]);
        break;

      case 'Picture':
        this.router.navigate(['/', HOME, PICTURE]);
        break;

      case 'Localisation':
        this.router.navigate(['/', HOME, LOCATION]);
        break;

      case 'Cell Network':
        this.router.navigate(['/', HOME, CELL_NETWORK]);
        break;
      default:
        this.router.navigate(['/', HOME, DASHBOARD]);
        break;
    }
  }
}
