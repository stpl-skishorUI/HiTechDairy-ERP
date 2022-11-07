import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ItemTransferFormComponent } from './item-transfer-form/item-transfer-form.component';

@Component({
  selector: 'app-item-transfer',
  templateUrl: './item-transfer.component.html',
  styleUrls: ['./item-transfer.component.scss']
})
export class ItemTransferComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'ItemID', 'ItemCategory','OldStore','NewStore','TransferDate','TransferApp','Action',];
  dataSource = ELEMENT_DATA;

  itemtransferform(){
    const dialogRef = this.dialog.open(ItemTransferFormComponent,{
      width: '600px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
  }

}
export interface PeriodicElement {
  position: number;
  name: string;
  ItemID: any;
  ItemCategory: string;
  OldStore:any;
  NewStore:any;
  TransferDate:any;
  TransferApp:any;
  Action:any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',OldStore:'hello',NewStore:'hello',TransferDate:'hello',TransferApp:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',OldStore:'hello',NewStore:'hello',TransferDate:'hello',TransferApp:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',OldStore:'hello',NewStore:'hello',TransferDate:'hello',TransferApp:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',OldStore:'hello',NewStore:'hello',TransferDate:'hello',TransferApp:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',OldStore:'hello',NewStore:'hello',TransferDate:'hello',TransferApp:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',OldStore:'hello',NewStore:'hello',TransferDate:'hello',TransferApp:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',OldStore:'hello',NewStore:'hello',TransferDate:'hello',TransferApp:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',OldStore:'hello',NewStore:'hello',TransferDate:'hello',TransferApp:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',OldStore:'hello',NewStore:'hello',TransferDate:'hello',TransferApp:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',OldStore:'hello',NewStore:'hello',TransferDate:'hello',TransferApp:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',OldStore:'hello',NewStore:'hello',TransferDate:'hello',TransferApp:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',OldStore:'hello',NewStore:'hello',TransferDate:'hello',TransferApp:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',OldStore:'hello',NewStore:'hello',TransferDate:'hello',TransferApp:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',OldStore:'hello',NewStore:'hello',TransferDate:'hello',TransferApp:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',OldStore:'hello',NewStore:'hello',TransferDate:'hello',TransferApp:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',OldStore:'hello',NewStore:'hello',TransferDate:'hello',TransferApp:'hello',Action:''},
  {position: 1, name: 'Hydrogen', ItemID: 1.0079, ItemCategory: 'H',OldStore:'hello',NewStore:'hello',TransferDate:'hello',TransferApp:'hello',Action:''},
  
 
];