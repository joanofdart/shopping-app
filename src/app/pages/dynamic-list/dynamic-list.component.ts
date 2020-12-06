import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'productName', 'storeName', 'actions'];
  availableProducts!: MatTableDataSource<Product>;
  selectedProducts: MatTableDataSource<Product> = new MatTableDataSource();

  constructor(private dataService: DataService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.availableProducts = new MatTableDataSource(this.dataService.availableProducts.value);
  }

  addRemoveProductFromSources(
    product: Product,
    addToDataSource: MatTableDataSource<Product>,
    removeFromDataSource: MatTableDataSource<Product>,
  ) {
    const index = removeFromDataSource.data.indexOf(product);
    removeFromDataSource.data.splice(index, 1);
    removeFromDataSource.data.sort((a, b) => this.dataService.sortAscending(a.storeName, b.storeName));

    addToDataSource.data.push(product);
    addToDataSource.data.sort((a, b) => this.dataService.sortAscending(a.storeName, b.storeName));

    removeFromDataSource._updateChangeSubscription();
    addToDataSource._updateChangeSubscription();
    this.cd.markForCheck();
  }

}
