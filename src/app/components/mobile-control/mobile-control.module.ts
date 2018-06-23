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
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { MobileControlComponent } from './mobile-control.component';

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
        MatListModule,
        MatProgressBarModule,
        MatSidenavModule,
        MatToolbarModule
    ],
    exports: [MobileControlComponent],
    declarations: [MobileControlComponent],
    providers: [],
})
export class MobileControlModule { }
