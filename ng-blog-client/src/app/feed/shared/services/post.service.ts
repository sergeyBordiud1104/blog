import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs/index';
import {map, mergeMap} from 'rxjs/internal/operators';

import { Post } from '../models/post';
import { environment } from '../../../../environments/environment';
import { Store } from 'store';

@Injectable()
export class PostService {

  constructor(private http: HttpClient,
              private store: Store) { }

  getPost(id: string): Observable<Post> {
    return this.http.get<Post>(`${environment.API}/posts/${id}`);
  }

  getAllPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(`${environment.API}/posts`);
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${environment.API}/posts`, post);
  }
  
  editPost(post: Post): Observable<Post> {
    console.log(post);
    return this.http.put<Post>(`${environment.API}/posts/${post._id}`, post)
  }

  deletePost(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.API}/posts/${id}`);
  }

}
