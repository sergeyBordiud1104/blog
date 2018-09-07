import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Post} from '../shared/models/post';
import {PostService} from '../shared/services/post.service';
import {switchMap} from 'rxjs/internal/operators';
import {Observable} from 'rxjs/index';

@Component({
  selector: 'app-post',
  styleUrls: ['post.component.scss'],
  template:  `
    <div class="post">
      <h1 class="post-title">{{post.title}}</h1>
      <p class="written-by">Written by: {{post.author}}</p>
      <img [src]="post.image" alt="" class="post-image">
      <p class="post-content">{{post.content}}</p>
    </div>
  `
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(private route: ActivatedRoute,
              private postService: PostService) {}

  ngOnInit(): void {    
    this.post = this.route.snapshot.data.post;
    console.log(this.post);
  }
}
