// import { Component, OnInit } from '@angular/core';
// import { FormGroup } from '@angular/forms';
// import { FormControl } from '@angular/forms';

import {Component, EventEmitter, Output, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import {PostService} from '../shared/services/post.service';

@Component({
  selector: 'new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  
  form: FormGroup;
  
  constructor(
    private postService: PostService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private  router: Router
  ) {
  }
  
  ngOnInit(): void {
    this.form = this.buildForm();
  }
  
  createPost() {
    const post = this.form.value;
    this.postService.createPost(post).subscribe(
      () => this.router.navigate(['/posts'])
    );
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
