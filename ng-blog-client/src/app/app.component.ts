import { Component, OnDestroy, OnInit } from '@angular/core';

import { takeUntil } from 'rxjs/internal/operators';
import { Subject, Observable } from 'rxjs/index';

import { Store } from 'store';
import { User } from './shared/models/user/user';
import { AuthService } from './auth/shared/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  user$: Observable<User>;

  private ngUnsubscribe: Subject<void> = new Subject();

  constructor(private store: Store,
              private auth: AuthService) {}

  ngOnInit(): void {
    this.user$ = this.store.select<User>('user')
      .pipe(
        takeUntil(this.ngUnsubscribe)
      );
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onLogout(): void {
    this.auth.logoutUser();
  }
}
