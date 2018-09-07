import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

import { AuthModalComponent } from '../../auth/auth-modal/auth-modal.component';
import { User } from '../../shared/models/user/user';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {
  @Input() user: User;
  @Output() logout = new EventEmitter();

  constructor(private dialog: MatDialog,
              private router: Router) { }

  openDialog() {
    this.router.navigate([{ outlets: { auth: ['login'] } }])
      .then(() => {
        const dialogRef = this.dialog.open(AuthModalComponent, {
          minHeight: 350,
          panelClass: 'auth-modal'
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.router.navigate([{ outlets: { auth: null } }]);
        });
    });
  }

  logoutUser(): void {
    this.logout.emit();
  }
}
