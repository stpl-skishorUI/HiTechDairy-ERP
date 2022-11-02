import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-registration',
  templateUrl: './item-registration.component.html',
  styleUrls: ['./item-registration.component.scss']
})
export class ItemRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'ItemID', 'ItemCategory','ItemGroup','ItemParameter','StoreName','VendorName','Action',];
  dataSource = ELEMENT_DATA;

}
export interface PeriodicElement {
  position: number;
  name: string;
  ItemID: any;
  ItemCategory: string;
  ItemGroup:any;
  ItemParameter:any;
  StoreName:any;
  VendorName:any;
  Action:any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',ItemGroup:'hello',ItemParameter:'hello',StoreName:'hello',VendorName:'hello',Action:''},
];