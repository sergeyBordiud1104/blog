import { Component, Input  } from '@angular/core';

import { Post } from '../../models/post';
import {User} from "../../../../shared/models/user/user";

@Component({
  selector: 'app-card',
  styleUrls: ['card.component.scss'],
  template:  `
    <mat-card class="post">
      <mat-card-header>
        <mat-card-title class="post-title">{{post.title}}</mat-card-title>
        <mat-card-actions *ngIf="user">
          <button mat-button [routerLink]="['edit-post/'+post._id]"  class="card-button">EDIT</button>
        </mat-card-actions>
        <mat-card-subtitle class="written-by">Written by <span>{{post.author}}</span></mat-card-subtitle>
      </mat-card-header>
      <img mat-card-image [src]="post.image" alt="">
      <mat-card-content>
        <p class="post-description">
          {{post.description}}
        </p>
      </mat-card-content>
      <ng-content select="button"></ng-content>
    </mat-card>
  `
})
export class CardComponent {
  @Input() post: Post;
  @Input() user: User;
}
