import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ShoppingHistory } from 'src/app/models/shopping-history';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  displayedColumns: string[] = ['purchaseDate', 'productName', 'storeName'];
  dataSource!: MatTableDataSource<ShoppingHistory>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.dataService.shoppingHistory.value);
  }

  searchForStore(storeName: string) {
    window.open(`http://google.com/search?q=${storeName}`);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
