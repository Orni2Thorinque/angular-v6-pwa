import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { ResetStepperComponent } from './reset-stepper/reset-stepper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatSnackBarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        CommonModule,

        FlexLayoutModule,

        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatStepperModule,
        MatSnackBarModule
    ],
    exports: [LoginComponent],
    declarations: [LoginComponent, ResetStepperComponent],
    providers: [LoginService],
    entryComponents: [ResetStepperComponent]
})
export class LoginModule { }
