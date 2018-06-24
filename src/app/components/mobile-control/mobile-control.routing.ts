import { Routes } from '@angular/router';

import { HOME, DASHBOARD, CAMERA, PICTURE, LOCATION, CELL_NETWORK } from './mobile-control.config';

import { MobileCameraComponent } from './mobile-camera/mobile-camera.component';
import { MobileControlComponent } from './mobile-control.component';
import { MobileDashboardComponent } from './mobile-dashboard/mobile-dashboard.component';
import { MobilePictureComponent } from './mobile-picture/mobile-picture.component';
import { MobileLocationComponent } from './mobile-location/mobile-location.component';
import { MobileCellNetworkComponent } from './mobile-cell-network/mobile-cell-network.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: HOME },
    {
        path: HOME, component: MobileControlComponent, children: [
            { path: '', pathMatch: 'full', redirectTo: DASHBOARD },
            { path: DASHBOARD, component: MobileDashboardComponent },
            { path: CAMERA, component: MobileCameraComponent },
            { path: PICTURE, component: MobilePictureComponent },
            { path: LOCATION, component: MobileLocationComponent },
            { path: CELL_NETWORK, component: MobileCellNetworkComponent }
        ]
    }
];
