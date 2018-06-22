import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { PasswordStrengthComponent } from './components/password-strength/password-strength.component';

export const LOGIN_PATH = 'login';
export const PASSWORD_STREGTH = 'passtrength';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: LOGIN_PATH },
    { path: LOGIN_PATH, component: LoginComponent },
    { path: PASSWORD_STREGTH, component: PasswordStrengthComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
