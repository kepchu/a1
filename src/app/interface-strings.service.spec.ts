import { TestBed } from '@angular/core/testing';

import { InterfaceStringsService } from './interface-strings.service';

describe('InterfaceStringsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterfaceStringsService = TestBed.get(InterfaceStringsService);
    expect(service).toBeTruthy();
  });
});
