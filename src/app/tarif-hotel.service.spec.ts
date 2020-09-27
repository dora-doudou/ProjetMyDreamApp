import { TestBed } from '@angular/core/testing';

import { TarifHotelService } from './service/tarif-hotel.service';

describe('TarifHotelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TarifHotelService = TestBed.get(TarifHotelService);
    expect(service).toBeTruthy();
  });
});
