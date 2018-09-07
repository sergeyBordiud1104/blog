import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/index';
import { map, pluck } from 'rxjs/internal/operators';

import { User } from '../../../../shared/models/user/user';
import { environment } from '../../../../../environments/environment';
import { Store } from 'store';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient,
              private store: Store) { }

  createUser(email: string, password: string): Observable<void> {
    return this.http.post<User>(`${environment.API}/auth/register`, {email, password})
      .pipe(
        pluck('token'),
        map(this.setToken),
        map(() => this.store.set('user', new User(email)))
      );
  }

  loginUser(email: string, password: string): Observable<void> {
    return this.http.post<User>(`${environment.API}/auth/login`, {email, password})
      .pipe(
        pluck('token'),
        map(this.setToken),
        map(() => this.store.set('user', new User(email)))
      );
  }

  logoutUser(): void {
    this.store.set('user', null);
    localStorage.removeItem('token');
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  private setToken(token): void {
    localStorage.setItem('token', token);
  }
}
