import { TestBed } from '@angular/core/testing';

import { ManageArticlesService } from './manage-articles.service';

describe('ManageArticlesService', () => {
  let service: ManageArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageArticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
