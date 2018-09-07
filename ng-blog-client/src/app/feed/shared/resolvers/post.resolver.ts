import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Resolve} from '@angular/router';

import { Observable } from 'rxjs/index';

import {Post} from '../models/post';
import {PostService} from '../services/post.service';

@Injectable()
export class PostResolver implements Resolve<Post> {

  constructor(private postsService: PostService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Post> {
    const id = route.params.id;
    return this.postsService.getPost(id);
  }
}
