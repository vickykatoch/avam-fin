import { TestBed, inject } from '@angular/core/testing';

import { TemplateStoreService } from './template-store.service';

describe('TemplateStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemplateStoreService]
    });
  });

  it('should be created', inject([TemplateStoreService], (service: TemplateStoreService) => {
    expect(service).toBeTruthy();
  }));
});
