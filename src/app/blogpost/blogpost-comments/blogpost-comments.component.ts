import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogpost-comments',
  templateUrl: './blogpost-comments.component.html',
  styleUrls: ['./blogpost-comments.component.css']
})
export class BlogpostCommentsComponent implements OnInit {

  error: string;
  uploadError: string;
  blogpostComments: FormGroup;

  constructor(
    private fb: FormBuilder,
    private blogService: BlogService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {

    this.blogpostComments = this.fb.group({
      comments: ['', Validators.required],
    });
  }
  get comments() { return this.blogpostComments.get('comments'); }
  onSubmit(){
    const formData = new FormData();
    formData.append('comments', this.blogpostComments.get('comments').value);

   // const id = this.blogpostComments.get('id').value;

    /*if (id) {
      this.blogService.updateBlog(formData, +id).subscribe(
        res => {
          if (res.status === 'error') {
            this.uploadError = res.message;
          } else {
            this.router.navigate(['/admin/blogs']);
          }
        },
        error => this.error = error
      );
    } else {
      this.blogService.createBlog(formData).subscribe(
        res => {
          if (res.status === 'error') {
            this.uploadError = res.message;
          } else {
            this.router.navigate(['/admin/blogs']);
          }
        },
        error => this.error = error
      );
    }*/
  }
}


