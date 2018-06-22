import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { ResetStepperComponent } from './reset-stepper/reset-stepper.component';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  protected visible: boolean;

  protected formGrp: FormGroup;
  protected usernameCtrl: FormControl;
  protected passwdCtrl: FormControl;

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.visible = true;
    this.initFormCtrl();
    this.initFormGrp();
  }

  private initFormCtrl(): void {
    this.usernameCtrl = new FormControl('', Validators.required);
    this.passwdCtrl = new FormControl('', Validators.required);
  }

  private initFormGrp(): void {
    this.formGrp = new FormGroup({
      username: this.usernameCtrl,
      password: this.passwdCtrl
    });
  }

  get snackbarconfig(): MatSnackBarConfig {
    const snackbarConfig: MatSnackBarConfig = {
      direction: 'ltr',
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    };

    return snackbarConfig;
  }

  protected onResetPassword(): void {
    this.visible = false;

    const dialogRef = this.dialog.open(ResetStepperComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      this.visible = true;
      if (result) {
        this.showSnackbar('Password changed successfully');
      } else if (result !== undefined) {
        this.showSnackbar('Error while changing password');
      }
    });
  }

  protected showSnackbar(message: string): void {
    this.snackBar.open(message, undefined, this.snackbarconfig);
  }
}
