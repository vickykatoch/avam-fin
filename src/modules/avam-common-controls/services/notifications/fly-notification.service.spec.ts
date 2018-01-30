import { TestBed, inject } from '@angular/core/testing';

import { FlyNotificationService } from './fly-notification.service';

describe('FlyNotificationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlyNotificationService]
    });
  });

  it('should be created', inject([FlyNotificationService], (service: FlyNotificationService) => {
    expect(service).toBeTruthy();
  }));
});
