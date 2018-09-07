import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material';
import {MatCardModule} from '@angular/material';

import {CardComponent} from './components/card/card.component';
import {PostService} from './services/post.service';
import {PostsResolver} from './resolvers/posts.resolver';
import { PostResolver } from './resolvers/post.resolver';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [
    CardComponent
  ],
  exports: [
    CardComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        PostService,
        PostsResolver,
        PostResolver
      ]
    };
  }
}
