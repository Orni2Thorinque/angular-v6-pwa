import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatBadgeModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { PasswordStrengthComponent } from './password-strength.component';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        CommonModule,

        FlexLayoutModule,

        MatBadgeModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatProgressBarModule
    ],
    exports: [PasswordStrengthComponent],
    declarations: [PasswordStrengthComponent],
    providers: [],
})
export class PasswordStrengthModule { }
