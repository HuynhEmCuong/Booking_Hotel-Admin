/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RoomCateService } from './room-cate.service';

describe('Service: RoomCate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomCateService]
    });
  });

  it('should ...', inject([RoomCateService], (service: RoomCateService) => {
    expect(service).toBeTruthy();
  }));
});
