import { Routes } from '@angular/router';

export const PWA = 'pwa';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: PWA },
    { path: PWA, loadChildren: 'app/components/mobile-control/mobile-control.module#MobileControlModule' }
];
