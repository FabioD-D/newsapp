import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesOneCategoryComponent } from './articles-one-category.component';

describe('ArticlesOneCategoryComponent', () => {
  let component: ArticlesOneCategoryComponent;
  let fixture: ComponentFixture<ArticlesOneCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticlesOneCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticlesOneCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
