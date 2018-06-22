import { Component, OnInit } from '@angular/core';
import { FormGroup, ValidationErrors, FormControl, Validators } from '@angular/forms';
import { scorePassword } from '../../shared/utils/password-strength.util';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent implements OnInit {
  protected passwordFormGroup: FormGroup;
  protected mode: 'determinate' | 'buffer' = 'determinate';
  protected visibility: 'visibility' | 'visibility_off' = 'visibility_off';

  get value(): number {
    let val = scorePassword(this.passwordFormGroup.get('password').value);

    if (val < 33) {
      this.passwordFormGroup.get('password').setErrors({ weak: true });
    } else if (val >= 100) {
      val = 100;
    }

    return isNaN(val) ? 0 : val;
  }

  get badge(): number {
    return Math.round(this.value);
  }

  get barColor(): string {
    return (this.value < 33) ? 'warn' :
      (this.value < 66) ? 'accent' : 'primary';
  }

  get copy(): boolean {
    return this.value > 33 ? true : false;
  }

  get type(): string {
    return this.visibility === 'visibility' ? 'text' : 'password';
  }

  constructor() { }

  ngOnInit() {
    this.passwordFormGroup = new FormGroup({
      'password': new FormControl('', [Validators.minLength(5), Validators.required]),
    });
  }

  protected focus(isFocused: boolean): void {
    if (isFocused) {
      this.mode = 'buffer';
    } else {
      this.mode = 'determinate';
    }
  }

  protected onChangeVisibility(): void {
    this.visibility = this.visibility === 'visibility' ? 'visibility_off' : 'visibility';
  }
}
