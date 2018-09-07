import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login.component';
import { ROUTES } from './login.routes';
import { AuthFormComponent } from '../shared/components/auth-form/auth-form.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    RouterModule.forChild(ROUTES),
    MatButtonModule
  ],
  declarations: [
    LoginComponent
  ],
  entryComponents: [
    AuthFormComponent,
  ]
})
export class LoginModule {}
