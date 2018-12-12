import { TestBed } from '@angular/core/testing';

import { GifphyService } from './gifphy.service';

describe('GifphyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GifphyService = TestBed.get(GifphyService);
    expect(service).toBeTruthy();
  });
});
