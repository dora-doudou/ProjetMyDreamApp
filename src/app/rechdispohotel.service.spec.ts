import { TestBed } from '@angular/core/testing';

import { RechdispohotelService } from './service/rechdispohotel.service';

describe('RechdispohotelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RechdispohotelService = TestBed.get(RechdispohotelService);
    expect(service).toBeTruthy();
  });
});
