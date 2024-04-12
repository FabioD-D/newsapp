import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesAllCategoriesComponent } from './articles-all-categories.component';

describe('ArticlesAllCategoriesComponent', () => {
  let component: ArticlesAllCategoriesComponent;
  let fixture: ComponentFixture<ArticlesAllCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticlesAllCategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticlesAllCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
