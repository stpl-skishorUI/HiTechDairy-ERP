import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partywise-material-rate',
  templateUrl: './partywise-material-rate.component.html',
  styleUrls: ['./partywise-material-rate.component.scss']
})
export class PartywiseMaterialRateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','commission','commissionrs','Discount','Discountrs','Action'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  commission:number;
  commissionrs:number;
  Discount:number;
  Discountrs:number;
  Action:any;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Microsoft', weight: 9922955666, symbol: 'Micro123@gmail.com',commission:50,commissionrs:25,Discount:10,Discountrs:570,Action:''},
  {position: 2, name: 'Wipro', weight: 7058942513, symbol: 'Wip856@gmail.com',commission:50,commissionrs:25,Discount:10,Discountrs:570,Action:''},
  {position: 3, name: 'Wipro', weight: 7058942513, symbol: 'Wip856@gmail.com',commission:50,commissionrs:25,Discount:10,Discountrs:570,Action:''},


];