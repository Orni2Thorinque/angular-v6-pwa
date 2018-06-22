import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatVerticalStepper } from '@angular/material';

import { LoginService } from '../login.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-reset-stepper',
  templateUrl: './reset-stepper.component.html',
  styleUrls: ['./reset-stepper.component.css']
})
export class ResetStepperComponent implements OnInit {
  @ViewChild(MatVerticalStepper) stepper: MatVerticalStepper;

  constructor(public dialogRef: MatDialogRef<ResetStepperComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private loginService: LoginService) { }

  protected userLoginFormGroup: FormGroup;
  protected passwordFormGroup: FormGroup;

  protected loading: boolean;

  static matchPassword(control: FormGroup): ValidationErrors {
    const password = control.get('password1').value; // to get value in input tag
    const confirmPassword = control.get('password2').value; // to get value in input tag
    if (password !== confirmPassword) {
      control.get('password2').setErrors({ matchPassword: true });
    } else {
      return null;
    }
  }

  ngOnInit() {
    this.loading = false;

    this.userLoginFormGroup = new FormGroup({
      'email': new FormControl('', [Validators.email, Validators.required]),
      'password': new FormControl('', Validators.required)
    });

    this.passwordFormGroup = new FormGroup({
      'password1': new FormControl('', [Validators.minLength(5), Validators.maxLength(16), Validators.required]),
      'password2': new FormControl('', [Validators.required])
    }, ResetStepperComponent.matchPassword);
  }

  private onSubmitLogin() {
    this.loading = true;
    if (this.userLoginFormGroup.valid) {
      this.loginService.signIn(this.userLoginFormGroup.get('email').value, this.userLoginFormGroup.get('password').value)
        .subscribe((res: boolean) => {
          if (res) {
            this.stepper.next();
            this.loading = false;
          } else {
            this.userLoginFormGroup.reset();
            this.userLoginFormGroup.setErrors({ invalidLogin: true });
            this.loading = false;
          }
        });
    } else {
      this.userLoginFormGroup.setErrors({ unknown: true });
    }
  }

  protected isStepInvalid(formStep: AbstractControl): boolean {
    return (formStep.invalid && formStep.errors) ? true : false;
  }

  protected getStepErrors(formStep: AbstractControl): string {
    let message: string = null;

    if (formStep.invalid && formStep.errors) {
      const errors = Object.keys(formStep.errors);
      if (errors && errors.length) {
        switch (errors[0]) {
          case 'invalidLogin':
            message = 'Invalid login';
            break;

          case 'matchPassword':
            message = 'Passwords doesn\'t match';
            break;


          default:
            message = 'unknown error';
            break;
        }
      }
    }

    return message;
  }

  protected onConfirmChange(): void {
    this.loading = true;

    const userName: string = this.userLoginFormGroup.get('email').value;
    const newPassword: string = this.passwordFormGroup.get('password1').value;

    this.loginService.changePassword(userName, newPassword).subscribe(
      (result: boolean) => {
        this.dialogRef.close(result);
        this.loading = false;

      }, (error) => {
        this.dialogRef.close(false);
        this.loading = false;
      });
  }
}

