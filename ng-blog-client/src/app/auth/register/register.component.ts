import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AuthService } from '../shared/services/auth/auth.service';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'register',
  template: `
    <auth-form (submitted)="registerUser($event)">
      <button mat-raised-button>Create account</button>
      <img src="../../../assets/images/signup.svg" alt="">
      <p>DON'T MISS OUT OUR UPCOMING POSTS</p>
      <div class="error" *ngIf="error">
        {{ error }}
      </div>
    </auth-form>
  `
})
export class RegisterComponent {
  error: string;

  constructor(private authService: AuthService,
              private dialog: MatDialog) {}

  registerUser(event: FormGroup) {
    const { email, password } = event.value;
    this.authService.createUser(email, password).subscribe(
      () => this.dialog.closeAll(),
      (err) => this.error = err.message
    );
  }
}
