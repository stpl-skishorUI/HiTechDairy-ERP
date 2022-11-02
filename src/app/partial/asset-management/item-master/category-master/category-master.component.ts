import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-master',
  templateUrl: './category-master.component.html',
  styleUrls: ['./category-master.component.scss']
})
export class CategoryMasterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['srno', 'item_name', 'item_category_name', 'action'];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  srno: number;
  item_name: string;
  item_category_name: string;
  action: any;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {srno: 1, item_name: 'Hydrogen', item_category_name: 'IT-Hardware Laptop', action: ''},
  {srno: 1, item_name: 'Hydrogen', item_category_name: 'IT-Hardware Laptop', action: ''},
  {srno: 1, item_name: 'Hydrogen', item_category_name: 'IT-Hardware Laptop', action: ''},
  {srno: 1, item_name: 'Hydrogen', item_category_name: 'IT-Hardware Laptop', action: ''},
  {srno: 1, item_name: 'Hydrogen', item_category_name: 'IT-Hardware Laptop', action: ''},
  {srno: 1, item_name: 'Hydrogen', item_category_name: 'IT-Hardware Laptop', action: ''},
  {srno: 1, item_name: 'Hydrogen', item_category_name: 'IT-Hardware Laptop', action: ''},
  {srno: 1, item_name: 'Hydrogen', item_category_name: 'IT-Hardware Laptop', action: ''},
  {srno: 1, item_name: 'Hydrogen', item_category_name: 'IT-Hardware Laptop', action: ''},
  {srno: 1, item_name: 'Hydrogen', item_category_name: 'IT-Hardware Laptop', action: ''},
  {srno: 1, item_name: 'Hydrogen', item_category_name: 'IT-Hardware Laptop', action: ''},
  {srno: 1, item_name: 'Hydrogen', item_category_name: 'IT-Hardware Laptop', action: ''},
  {srno: 1, item_name: 'Hydrogen', item_category_name: 'IT-Hardware Laptop', action: ''},
  {srno: 1, item_name: 'Hydrogen', item_category_name: 'IT-Hardware Laptop', action: ''},
  {srno: 1, item_name: 'Hydrogen', item_category_name: 'IT-Hardware Laptop', action: ''},
  {srno: 1, item_name: 'Hydrogen', item_category_name: 'IT-Hardware Laptop', action: ''},
  {srno: 1, item_name: 'Hydrogen', item_category_name: 'IT-Hardware Laptop', action: ''},
  {srno: 1, item_name: 'Hydrogen', item_category_name: 'IT-Hardware Laptop', action: ''},
  {srno: 1, item_name: 'Hydrogen', item_category_name: 'IT-Hardware Laptop', action: ''},
  {srno: 1, item_name: 'Hydrogen', item_category_name: 'IT-Hardware Laptop', action: ''},
  {srno: 1, item_name: 'Hydrogen', item_category_name: 'IT-Hardware Laptop', action: ''},
  {srno: 1, item_name: 'Hydrogen', item_category_name: 'IT-Hardware Laptop', action: ''},
  {srno: 1, item_name: 'Hydrogen', item_category_name: 'IT-Hardware Laptop', action: ''},
  {srno: 1, item_name: 'Hydrogen', item_category_name: 'IT-Hardware Laptop', action: ''},
  {srno: 1, item_name: 'Hydrogen', item_category_name: 'IT-Hardware Laptop', action: ''},
  {srno: 1, item_name: 'Hydrogen', item_category_name: 'IT-Hardware Laptop', action: ''},
  
];