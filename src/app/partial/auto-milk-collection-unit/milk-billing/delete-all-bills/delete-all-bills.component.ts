import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-all-bills',
  templateUrl: './delete-all-bills.component.html',
  styleUrls: ['./delete-all-bills.component.scss']
})
export class DeleteAllBillsComponent implements OnInit {

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
  {position: 6, name: 'Hydrogen', weight: 1.0079, symbol: 'H', action: ''},
  {position: 7, name: 'Hydrogen', weight: 1.0079, symbol: 'H', action: ''},
  {position: 8, name: 'Hydrogen', weight: 1.0079, symbol: 'H', action: ''},
  {position: 9, name: 'Hydrogen', weight: 1.0079, symbol: 'H', action: ''},
  {position: 10, name: 'Hydrogen', weight: 1.0079, symbol: 'H', action: ''},
 
];