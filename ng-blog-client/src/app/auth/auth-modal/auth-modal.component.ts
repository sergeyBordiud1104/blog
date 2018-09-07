import { Component } from '@angular/core';

@Component({
  selector: 'auth-modal',
  styleUrls: ['auth-modal.component.scss'],
  template:  `
    <div mat-dialog-content> 
      <router-outlet name="auth"></router-outlet>
    </div>
  `
})
export class AuthModalComponent {
}
