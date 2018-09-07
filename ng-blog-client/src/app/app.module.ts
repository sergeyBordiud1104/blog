import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {
  MatDialogModule,
  MatGridListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule } from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './navigation/app-header/app-header.component';
import { AppNavComponent } from './navigation/app-nav/app-nav.component';
import { ROUTES } from './app.routes';
import { AuthModalComponent } from './auth/auth-modal/auth-modal.component';
import { TokenInterceptor } from './auth/shared/services/auth/token.interceptor';
import { AuthService } from './auth/shared/services/auth/auth.service';
import { Store } from 'store';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppNavComponent,
    AuthModalComponent
  ],
  entryComponents: [AuthModalComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [
    AuthService,
    Store,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
