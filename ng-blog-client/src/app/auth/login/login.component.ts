import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {MatDialog} from '@angular/material';

import { AuthService } from '../shared/services/auth/auth.service';

@Component({
  selector: 'login',
  template: `
    <auth-form (submitted)="loginUser($event)">
      <button mat-raised-button class="login-button">Login</button>
      <img src="../../../assets/images/signin.svg" alt="">
      <p>WELCOME BACK</p>
      <div class="error" *ngIf="error">
        {{ error }}
      </div>
    </auth-form>
  `
})
export class LoginComponent {
  error: string;

  constructor(private authService: AuthService,
              private dialog: MatDialog) {}

  loginUser(event: FormGroup) {
    const { email, password } = event.value;
    this.authService.loginUser(email, password).subscribe(
      () => this.dialog.closeAll(),
      (err) => this.error = err.message
    );
  }
}
