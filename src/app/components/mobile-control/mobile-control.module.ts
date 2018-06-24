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
    MatFormFieldModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { MobileControlComponent } from './mobile-control.component';
import { RouterModule } from '@angular/router';
import { routes } from './mobile-control.routing';
import { MobileCameraComponent } from './mobile-camera/mobile-camera.component';
import { MobileDashboardComponent } from './mobile-dashboard/mobile-dashboard.component';
import { MobilePictureComponent } from './mobile-picture/mobile-picture.component';
import { MobileLocationComponent } from './mobile-location/mobile-location.component';
import { AgmCoreModule } from '@agm/core';

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
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatProgressBarModule,
        MatSidenavModule,
        MatToolbarModule,

        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD34RjtiTnaRqozCPxIexBMDQ60POjThV8'
        })
    ],
    exports: [MobileControlComponent],
    declarations: [
        MobileControlComponent,
        MobileCameraComponent,
        MobileDashboardComponent,
        MobilePictureComponent,
        MobileLocationComponent
    ],
    providers: [],
})
export class MobileControlModule { }
