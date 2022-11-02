import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-master',
  templateUrl: './group-master.component.html',
  styleUrls: ['./group-master.component.scss']
})
export class GroupMasterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['srno', 'item_name', 'action'];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  srno: number;
  item_name: string;
  action: any;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {srno: 1, item_name: 'Hydrogen', action: ''},
  {srno: 1, item_name: 'Hydrogen', action: ''},
  {srno: 1, item_name: 'Hydrogen', action: ''},
  {srno: 1, item_name: 'Hydrogen', action: ''},

];