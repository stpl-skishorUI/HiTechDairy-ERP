import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ItemRegistrationFormComponent } from './item-registration-form/item-registration-form.component';

@Component({
  selector: 'app-item-registration',
  templateUrl: './item-registration.component.html',
  styleUrls: ['./item-registration.component.scss']
})
export class ItemRegistrationComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(ItemRegistrationFormComponent,{
    width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
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
  {position: 1, name: 'Development', ItemID: 156642, ItemCategory: 'Hardware',ItemGroup:'Developer',ItemParameter:'software',StoreName:'STPL',VendorName:'ABC',Action:''},
  {position: 2, name: 'Development', ItemID: 156642, ItemCategory: 'Hardware',ItemGroup:'Developer',ItemParameter:'software',StoreName:'STPL',VendorName:'ABC',Action:''},
  {position: 3, name: 'Development', ItemID: 156642, ItemCategory: 'Hardware',ItemGroup:'Developer',ItemParameter:'software',StoreName:'STPL',VendorName:'ABC',Action:''},
  {position: 4, name: 'Development', ItemID: 156642, ItemCategory: 'Hardware',ItemGroup:'Developer',ItemParameter:'software',StoreName:'STPL',VendorName:'ABC',Action:''},
  {position: 5, name: 'Development', ItemID: 156642, ItemCategory: 'Hardware',ItemGroup:'Developer',ItemParameter:'software',StoreName:'STPL',VendorName:'ABC',Action:''},
  {position: 6, name: 'Development', ItemID: 156642, ItemCategory: 'Hardware',ItemGroup:'Developer',ItemParameter:'software',StoreName:'STPL',VendorName:'ABC',Action:''},
  {position: 7, name: 'Development', ItemID: 156642, ItemCategory: 'Hardware',ItemGroup:'Developer',ItemParameter:'software',StoreName:'STPL',VendorName:'ABC',Action:''},

];

