import { Routes } from '@angular/router';
import { MobileCameraComponent } from './mobile-camera/mobile-camera.component';
import { MobileControlComponent } from './mobile-control.component';
import { MobileDashboardComponent } from './mobile-dashboard/mobile-dashboard.component';
import { HOME, DASHBOARD, CAMERA } from './mobile-control.config';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: HOME },
    {
        path: HOME, component: MobileControlComponent, children: [
            { path: '', pathMatch: 'full', redirectTo: DASHBOARD },
            { path: DASHBOARD, component: MobileDashboardComponent },
            { path: CAMERA, component: MobileCameraComponent },
        ]
    }
];
