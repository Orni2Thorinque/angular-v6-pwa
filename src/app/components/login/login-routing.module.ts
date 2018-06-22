import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';

export const LOGIN_PATH = 'login';
export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: LOGIN_PATH },
    { path: LOGIN_PATH, component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LoginRoutingModule { }
