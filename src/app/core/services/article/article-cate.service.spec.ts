/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArticleCateService } from './article-cate.service';

describe('Service: ArticleCate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleCateService]
    });
  });

  it('should ...', inject([ArticleCateService], (service: ArticleCateService) => {
    expect(service).toBeTruthy();
  }));
});
