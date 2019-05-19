import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule  } from '@angular/forms';
import { BlogpostRoutingModule } from './blogpost-routing.module';
import { BlogpostFeaturedComponent } from './blogpost-featured/blogpost-featured.component';
import { BlogpostListComponent } from './blogpost-list/blogpost-list.component';
import { BlogpostDetailComponent } from './blogpost-detail/blogpost-detail.component';
import { BlogpostRecentComponent } from './blogpost-recent/blogpost-recent.component';
import { CategoriesComponent } from './categories/categories.component';
import { BlogpostCommentsComponent } from './blogpost-comments/blogpost-comments.component';

@NgModule({
  declarations: [BlogpostFeaturedComponent, BlogpostListComponent, BlogpostDetailComponent, BlogpostRecentComponent, CategoriesComponent, BlogpostCommentsComponent],
  imports: [
    CommonModule,
    BlogpostRoutingModule,ReactiveFormsModule
  ],
  exports:[
    BlogpostFeaturedComponent
  ],
})
export class BlogpostModule { }
