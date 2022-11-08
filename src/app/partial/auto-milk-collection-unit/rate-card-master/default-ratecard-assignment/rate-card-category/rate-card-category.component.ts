import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate-card-category',
  templateUrl: './rate-card-category.component.html',
  styleUrls: ['./rate-card-category.component.scss']
})
export class RateCardCategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['srno', 'ratecard_category', 'description', 'action'];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  srno: number;
  ratecard_category: string;
  description: string;
  action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {srno: 1, ratecard_category: 'Hydrogen', description: '1.0079', action: ''},
 
];
