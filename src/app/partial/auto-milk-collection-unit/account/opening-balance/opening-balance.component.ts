import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opening-balance',
  templateUrl: './opening-balance.component.html',
  styleUrls: ['./opening-balance.component.scss']
})
export class OpeningBalanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','Action'];
  dataSource = ELEMENT_DATA;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Microsoft', weight: 9922955666, symbol: 'Micro123@gmail.com',Action:''},
  {position: 2, name: 'Wipro', weight: 7058942513, symbol: 'Wip856@gmail.com',Action:''},
  {position: 3, name: 'Wipro', weight: 7058942513, symbol: 'Wip856@gmail.com',Action:''},


];
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  Action:any;

}