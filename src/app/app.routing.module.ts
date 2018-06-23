import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { PasswordStrengthComponent } from './components/password-strength/password-strength.component';
import { MobileControlComponent } from './components/mobile-control/mobile-control.component';

// export const LOGIN_PATH = 'login';
// export const PASSWORD_STREGTH = 'passtrength';
export const PWA = 'pwa';
// export const routes: Routes = [
//     { path: '', pathMatch: 'full', redirectTo: PWA },
//     { path: PWA, component: MobileControlComponent },
//     { path: LOGIN_PATH, component: LoginComponent },
//     { path: PASSWORD_STREGTH, component: PasswordStrengthComponent }
// ];

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: PWA },
    { path: PWA, component: MobileControlComponent },
];
