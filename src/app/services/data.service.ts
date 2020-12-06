import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';
import { ShoppingHistory } from '../models/shopping-history';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  itemsToPopulate: number = 5;
  storeNames: string[] = [
    'Amazon',
    'Ebay',
    'Facebook Market',
    'MediaMarket',
    'ScanUK',
  ].sort(this.sortAscending);
  productNames: string[] = [
    'be quiet! Dark Power Pro 11',
    'Nvidia RTX 3090 Founders Edition',
    'Nvidia RTX 3080 Founders Edition',
    'AMD RX 6900 XT',
    'AMD Ryzen 5950X',
    'AMD Ryzen 5600X',
  ].sort(this.sortAscending);
  shoppingHistory!: BehaviorSubject<ShoppingHistory[]>;
  availableProducts!: BehaviorSubject<Product[]>;

  constructor() {
    this.populateShoppingHistory();
    this.populateProductsAvailable();
  }

  populateShoppingHistory() {
    const shoppingHistory = this.storeNames.map((storeName) => {
      const currentDate = new Date();
      const productNumber = this.getRandomNumber(10000000000, 0);
      const randomDate = Math.floor(Math.random() * 10);
      const randomProduct = this.getRandomNumber(this.productNames.length - 1, 0);
      return {
        id: productNumber,
        purchaseDate: currentDate.setDate(currentDate.getDate() - randomDate),
        productName: this.productNames[randomProduct],
        storeName: storeName
      };
    });
    this.shoppingHistory = new BehaviorSubject(shoppingHistory);
  }

  populateProductsAvailable() {
    const productsAvailable = this.storeNames.flatMap((storeName) => {
      const products = this.productNames.map((productName) => {
        const productNumber = this.getRandomNumber(10000000000, 0);
        return {
          id: productNumber,
          productName: productName,
          storeName,
        }
      });
      return products;
    });

    this.availableProducts = new BehaviorSubject(productsAvailable);
  }

  sortAscending(productNameA: string, productNameB: string) {
    if (productNameA < productNameB) {
      return -1;
    }

    if (productNameB > productNameA) {
      return 1;
    }

    return 0;
  }

  private getRandomNumber(max: number, min: number) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }

}
