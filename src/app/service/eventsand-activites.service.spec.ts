import { TestBed } from '@angular/core/testing';

import { EventsandActivitesService } from './eventsand-activites.service';

describe('EventsandActivitesService', () => {
  let service: EventsandActivitesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsandActivitesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
