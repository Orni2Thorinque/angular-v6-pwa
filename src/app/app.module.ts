import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginModule } from './components/login/login.module';
import { RouterModule } from '@angular/router';
import { PasswordStrengthModule } from './components/password-strength/password-strength.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MobileControlComponent } from './components/mobile-control/mobile-control.component';
import { routes } from './app.routing.module';
import { MobileControlModule } from './components/mobile-control/mobile-control.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { useHash: true }),

    MobileControlModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }




















// FlexLayoutModule,
// MatAutocompleteModule,
// MatButtonModule,
// MatButtonToggleModule,
// MatCardModule,
// MatCheckboxModule,
// MatChipsModule,
// MatDatepickerModule,
// MatDialogModule,
// MatExpansionModule,
// MatGridListModule,
// MatIconModule,
// MatInputModule,
// MatListModule,
// MatMenuModule,
// MatNativeDateModule,
// MatPaginatorModule,
// MatProgressBarModule,
// MatProgressSpinnerModule,
// MatRadioModule,
// MatRippleModule,
// MatSelectModule,
// MatSidenavModule,
// MatSliderModule,
// MatSlideToggleModule,
// MatSnackBarModule,
// MatSortModule,
// MatTableModule,
// MatTabsModule,
// MatToolbarModule,
// MatTooltipModule,
// MatStepperModule,