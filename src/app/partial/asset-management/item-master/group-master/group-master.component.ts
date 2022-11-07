import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-group-master',
  templateUrl: './group-master.component.html',
  styleUrls: ['./group-master.component.scss']
})
export class GroupMasterComponent implements OnInit {

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

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
  {srno: 1, item_name: 'Software testing', action: ''},
  {srno: 2, item_name: 'Mechanical Engineering', action: ''},
  {srno: 3, item_name: 'Civil Engineering', action: ''},
  {srno: 4, item_name: 'E & Tc Engineering', action: ''},

];