import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-transfer',
  templateUrl: './item-transfer.component.html',
  styleUrls: ['./item-transfer.component.scss']
})
export class ItemTransferComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'ItemID', 'ItemCategory','OldStore','NewStore','TransferDate','TransferApp','Action',];
  dataSource = ELEMENT_DATA;
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