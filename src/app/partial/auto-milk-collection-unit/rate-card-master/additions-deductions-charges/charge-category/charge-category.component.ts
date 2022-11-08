import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charge-category',
  templateUrl: './charge-category.component.html',
  styleUrls: ['./charge-category.component.scss']
})
export class ChargeCategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['charge_category', 'Unit'];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  charge_category: string;
  Unit: number;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {charge_category: 'Charge Category', Unit: 1},
 
];
