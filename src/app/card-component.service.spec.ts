import { TestBed } from '@angular/core/testing';

import { CardComponentService } from './card-component.service';

describe('CardComponentService', () => {
  let service: CardComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
