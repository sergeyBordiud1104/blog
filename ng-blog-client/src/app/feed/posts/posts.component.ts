import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { Observable, Subject } from 'rxjs/index';
import { takeUntil, switchMap, map } from 'rxjs/operators';
import { PostService } from '../shared/services/post.service';

import { Post } from '../shared/models/post';
import {User} from "../../shared/models/user/user";
// import { Store } from 'store';

@Component({
  selector: 'app-posts',
  styleUrls: ['posts.component.scss'],
  template:  `
    <div class="feed-wrapper">
      <div class="card" *ngFor="let post of posts">
        <app-card [post]="post">
          <button mat-stroked-button [routerLink]="[post._id]" class="card-button">
            READ MORE
          </button>
          <button mat-stroked-button *ngIf="user" (click)="deletePost(post._id, post)" class="card-button delete-button">DELETE</button>
        </app-card>
      </div>
    </div>
    <ng-template #loading>
      <div class="message">
        Fetching posts...
      </div>
    </ng-template>
  `
})
export class PostsComponent implements OnInit {
  
  @Input() user: User;
  
  posts: Array<Post>;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,) {}

  ngOnInit(): void {
    // this.posts = this.route.snapshot.data.posts;
    this.postService.getAllPosts().subscribe(
      posts => this.posts = posts
    );
  }

  deletePost(id) {
    this.postService.deletePost(id)
    .pipe(
      map(() => this.posts.filter(post => post._id !== id)),
      map(posts => this.posts = posts)
    )
    .subscribe();
  }
}
