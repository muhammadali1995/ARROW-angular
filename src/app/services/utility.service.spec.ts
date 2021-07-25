import { TestBed } from '@angular/core/testing';

import { UtilityService } from './utility.service';

describe('UtilityService', () => {
  let utilityService: UtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    utilityService = TestBed.inject(UtilityService);
  });

  it('should be created', () => {
    expect(utilityService).toBeTruthy();
  });

  describe('getAugmentedUrl()', () => {
    const base_url = '/api/url/test';

    it('should return augmented url when string params are provided', () => {
      const result = utilityService.getAugmentedUrl(base_url, { param1: '1', param2: '2', param3: '3' });

      expect(result).toEqual(base_url + '?param1=1&param2=2&param3=3');
    });

    it('should return augmented url when number params are provided', () => {
      const result = utilityService.getAugmentedUrl(base_url, { param1: 1, param2: 2, param3: 3 });

      expect(result).toEqual(base_url + '?param1=1&param2=2&param3=3');
    });

    it('should return url when no query params provided', () => {
      const result = utilityService.getAugmentedUrl(base_url);

      expect(result).toEqual(base_url);
    });

    it('should return url without null, undefined, or empty params', () => {
      const result = utilityService.getAugmentedUrl(base_url, { param1: undefined, param2: null, param3: '', param4: 0 });

      expect(result).toEqual(base_url + '?param4=0');
    });
  });
});
