import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ItemScrapDonatedFormComponent} from './item-scrap-donated-form/item-scrap-donated-form.component';

@Component({
  selector: 'app-item-scrap-donated',
  templateUrl: './item-scrap-donated.component.html',
  styleUrls: ['./item-scrap-donated.component.scss']
})
export class ItemScrapDonatedComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
  }
  displayedColumns: string[] = ['srno', 'item_name', 'item_id', 'vendor_name','purchase_date','disposal_method','action'];
  dataSource = ELEMENT_DATA;

  itemscrapform(){
    const dialogRef = this.dialog.open(ItemScrapDonatedFormComponent,{
      width: '600px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
  }

}
export interface PeriodicElement {
  srno: number;
  item_name: string;
  item_id: number;
  vendor_name: string;
  purchase_date: string;
  disposal_method: string;
  action: any;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {srno: 1, item_name: 'Civil Department', item_id: 179942, vendor_name: 'Harish',purchase_date:'24/5/2022',disposal_method:'scrap',action:''},

];
