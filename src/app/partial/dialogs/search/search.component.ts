import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','quantity','Amount','Dispatch','Action'];
  dataSource = ELEMENT_DATA;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'M', weight: 99, symbol: 'Mic',quantity:'b',Amount:'s',Dispatch:'ok',Action:''},
  {position: 2, name: 'W', weight: 7, symbol: 'Wi',quantity:'b',Amount:'s',Dispatch:'ok',Action:''},
  {position: 3, name: 'W', weight: 705, symbol: 'Wi5',quantity:'b',Amount:'s',Dispatch:'ok',Action:''},


];
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  Action:any;
  quantity:string;
  Amount:string;
  Dispatch:string;
}
