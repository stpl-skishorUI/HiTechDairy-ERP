import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-master',
  templateUrl: './store-master.component.html',
  styleUrls: ['./store-master.component.scss']
})
export class StoreMasterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','Action'];
  dataSource = ELEMENT_DATA;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Sanket hardware', weight: 9586954523, symbol: 'Swargate pune 413005',Action:''},
  {position: 2, name: 'Rahul Software', weight: 9503911266, symbol: 'Dhankwadi near shankar shet math',Action:''},
  {position: 3, name: 'Rahul Software', weight: 9503911266, symbol: 'Dhankwadi near shankar shet math',Action:''},


];
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  Action:any;
}
