import { BehaviorSubject, Observable } from 'rxjs/index';
import { distinctUntilChanged, pluck } from 'rxjs/internal/operators';

import { Post } from './app/feed/shared/models/post';
import { User } from './app/shared/models/user/user';

export interface State {
  user: User,
  posts: Array<Post>,
  [key: string]: any
}

const state: State = {
  user: undefined,
  posts: undefined
};

export class Store {
  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pipe(pluck(name));
  }

  set(name: string, state: any): void {
    this.subject.next({ ...this.value, [name]: state });
  }

}
