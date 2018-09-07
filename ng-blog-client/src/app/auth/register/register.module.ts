import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register.component';
import { ROUTES } from './register.routes';

@NgModule({
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    RouterModule.forChild(ROUTES),
    MatButtonModule
  ],
  declarations: [
    RegisterComponent
  ]
})
export class RegisterModule {}
