import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should have populated shopping history', () => {
    expect(service.shoppingHistory).toBeTruthy();
  });

  test('shopping history should have 5 values', () => {
    const amountOfItems = service.shoppingHistory.value.length;
    expect(amountOfItems).toEqual(5);
  });

  test('available products should have 30 values', () => {
    const amountOfItems = service.availableProducts.value.length;
    expect(amountOfItems).toEqual(30);
  });

});
