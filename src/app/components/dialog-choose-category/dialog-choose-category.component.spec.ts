import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogChooseCategoryComponent } from './dialog-choose-category.component';

describe('DialogChooseCategoryComponent', () => {
  let component: DialogChooseCategoryComponent;
  let fixture: ComponentFixture<DialogChooseCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogChooseCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogChooseCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
