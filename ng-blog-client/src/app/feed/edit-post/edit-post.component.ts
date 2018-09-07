import {Component, EventEmitter, Output, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import {PostService} from '../shared/services/post.service';
import {Post} from "../shared/models/post";
import {map} from "rxjs/operators";

@Component({
  selector: 'edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  
  post: Post;
  posts: Array<Post>;
  formEdit: FormGroup;
  
  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private  router: Router
  ) {
  }
  
  ngOnInit(): void {
    this.post = this.route.snapshot.data.post;
    this.posts = this.route.snapshot.data.posts;
    this.formEdit = this.buildForm();
    this.formEdit.setValue({
      title: this.post.title,
      author: this.post.author,
      image: this.post.image,
      description: this.post.description,
      content: this.post.content
    });
  }
  
  editPost() {
    let postBody = this.formEdit.value;
    postBody._id = this.post._id;
    this.postService.editPost(postBody)
      .pipe(
        map(() => this.posts.filter(post => post._id !== postBody._id)),
        map(posts => this.posts = posts)
      ).subscribe(() => this.router.navigate(['/posts']));
  }
  
  private buildForm(): FormGroup {
    return new FormGroup({
      title: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }

}
