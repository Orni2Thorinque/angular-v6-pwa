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
    MatDividerModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { MobileControlComponent } from './mobile-control.component';
import { RouterModule } from '@angular/router';
import { routes } from './mobile-control.routing';
import { MobileCameraComponent } from './mobile-camera/mobile-camera.component';
import { MobileDashboardComponent } from './mobile-dashboard/mobile-dashboard.component';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild(routes),
        FlexLayoutModule,

        MatBadgeModule,
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatProgressBarModule,
        MatSidenavModule,
        MatToolbarModule
    ],
    exports: [MobileControlComponent],
    declarations: [
        MobileControlComponent,
        MobileCameraComponent,
        MobileDashboardComponent
    ],
    providers: [],
})
export class MobileControlModule { }
