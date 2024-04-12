import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainviewArticleComponent } from './mainview-article.component';

describe('MainviewArticleComponent', () => {
  let component: MainviewArticleComponent;
  let fixture: ComponentFixture<MainviewArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainviewArticleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainviewArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
