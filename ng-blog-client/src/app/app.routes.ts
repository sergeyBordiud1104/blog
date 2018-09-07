import { Route } from '@angular/router';

export const ROUTES: Array<Route> = [
  { path: '', pathMatch: 'full', redirectTo: 'posts' },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: 'posts', loadChildren: './feed/feed.module#FeedModule' },
  { path: 'login', outlet: 'auth', loadChildren: './auth/login/login.module#LoginModule'},
  { path: 'register', outlet: 'auth', loadChildren: './auth/register/register.module#RegisterModule'},
];
