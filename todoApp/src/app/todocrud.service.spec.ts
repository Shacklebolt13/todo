import { TestBed } from '@angular/core/testing';

import { TodocrudService } from './todocrud.service';

describe('TodocrudService', () => {
  let service: TodocrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodocrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
