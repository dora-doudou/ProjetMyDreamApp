import { TestBed } from '@angular/core/testing';

import { CarouselService } from './service/carousel.service';

describe('CarouselService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarouselService = TestBed.get(CarouselService);
    expect(service).toBeTruthy();
  });
});
