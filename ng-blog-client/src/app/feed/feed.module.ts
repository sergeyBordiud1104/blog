import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { SharedModule } from './shared/shared.moduel';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { PostsResolver } from './shared/resolvers/posts.resolver';
import { NewPostComponent } from './new-post/new-post.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PostResolver } from './shared/resolvers/post.resolver';
import { EditPostComponent } from './edit-post/edit-post.component';

export const ROUTES: Routes = [
  {
    path: '',
    resolve: {
      posts: PostsResolver
    },
    children: [
      {
        path: '',
        component: PostsComponent,
      },
      {
        path: 'new-post',
        component: NewPostComponent,
      },
      {
        path: 'edit-post/:id',
        component: EditPostComponent,
        resolve: {
          post: PostResolver
        }
      },
      {
        path: ':id',
        component: PostComponent,
        resolve: {
          post: PostResolver
        }
      },
    ]
  }
];

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    NewPostComponent,
    EditPostComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(ROUTES),
    SharedModule.forRoot()
  ]
})
export class FeedModule {}
