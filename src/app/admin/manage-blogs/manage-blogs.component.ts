import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-manage-blogs',
  templateUrl: './manage-blogs.component.html',
  styleUrls: ['./manage-blogs.component.css']
})
export class ManageBlogsComponent implements OnInit {

  title = 'Administrar Posts';
  blogs: Blog;
  error: string;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getBlogs().subscribe(
      (data: Blog) => this.blogs = data,
      error => this.error = error
    );
  }

  onDelete(id: number) {
    if (confirm('¿Seguro que quieres borrar? id = ' + id)) {
      this.blogService.deleteBlog(+id).subscribe(
        res => {
          console.log(res);
          this.ngOnInit();
        },
        error => this.error = error
      );
    }
  }
}