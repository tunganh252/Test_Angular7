import { TestBed } from '@angular/core/testing';

import { QuanLyPhimServiceService } from './quan-ly-phim-service.service';

describe('QuanLyPhimServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuanLyPhimServiceService = TestBed.get(QuanLyPhimServiceService);
    expect(service).toBeTruthy();
  });
});
