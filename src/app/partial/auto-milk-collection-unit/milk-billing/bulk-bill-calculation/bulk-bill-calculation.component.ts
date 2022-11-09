import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulk-bill-calculation',
  templateUrl: './bulk-bill-calculation.component.html',
  styleUrls: ['./bulk-bill-calculation.component.scss']
})
export class BulkBillCalculationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','action'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', action: ''},
  {position: 2, name: 'Hydrogen', weight: 1.0079, symbol: 'H', action: ''},
  {position: 3, name: 'Hydrogen', weight: 1.0079, symbol: 'H', action: ''},
  {position: 4, name: 'Hydrogen', weight: 1.0079, symbol: 'H', action: ''},
  {position: 5, name: 'Hydrogen', weight: 1.0079, symbol: 'H', action: ''},
 
];
