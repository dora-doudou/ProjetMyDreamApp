import { TestBed } from '@angular/core/testing';

import { DispoHotelService } from './service/dispo-hotel.service';

describe('DispoHotelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DispoHotelService = TestBed.get(DispoHotelService);
    expect(service).toBeTruthy();
  });
});
