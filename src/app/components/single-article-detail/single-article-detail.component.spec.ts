import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleArticleDetailComponent } from './single-article-detail.component';

describe('SingleArticleDetailComponent', () => {
  let component: SingleArticleDetailComponent;
  let fixture: ComponentFixture<SingleArticleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleArticleDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleArticleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
