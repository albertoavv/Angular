import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogpostCommentsComponent } from './blogpost-comments.component';

describe('BlogpostCommentsComponent', () => {
  let component: BlogpostCommentsComponent;
  let fixture: ComponentFixture<BlogpostCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogpostCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogpostCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
