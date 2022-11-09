import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-milk-purchase-bill',
  templateUrl: './milk-purchase-bill.component.html',
  styleUrls: ['./milk-purchase-bill.component.scss']
})
export class MilkPurchaseBillComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['srno', 'type', 'milk', 'fat','snf','rate','milk_amount','action'];
  dataSource = ELEMENT_DATA;

  displayedColumns2: string[] = ['srno', 'date', 'type', 'route','shift','fat','degree','snf','milk','rate','amount','action'];
  dataSource2 = ELEMENT_DATA2;

  // right side table
  displayedColumns3: string[] = ['srno', 'bill_no', 'start_date', 'to_date','action'];
  dataSource3 = ELEMENT_DATA3;


}
export interface PeriodicElement {
  srno: number;
  type: string;
  milk: number;
  fat: string;
  snf: string;
  rate: string;
  milk_amount: number;
  action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {srno: 1, type: 'A', milk: 100, fat: 'Fat amount',snf:'snf value',rate:'50000',milk_amount:2000,action: ''},
 
];


export interface PeriodicElement2 {
  srno: number;
  date: string;
  type: number;
  route: string;
  shift: string;
  fat: string;
  degree: string;
  snf: string;
  milk: string;
  rate: number;
  amount: string;
  action: any;
}

const ELEMENT_DATA2: PeriodicElement2[] = [
  {srno: 1, date: '21-1-2022', type: 1.0079, route: 'demo',shift:'Morning',fat:'high',degree:'A+',snf:'snf val',milk:'5000',rate:500000,amount:'20000',action:''},
  {srno: 2, date: '21-1-2022', type: 1.0079, route: 'demo',shift:'Night',fat:'high',degree:'A+',snf:'snf val',milk:'5000',rate:500000,amount:'20000',action:''},
  {srno: 3, date: '21-1-2022', type: 1.0079, route: 'demo',shift:'Morning',fat:'high',degree:'A+',snf:'snf val',milk:'5000',rate:500000,amount:'20000',action:''},
  {srno: 4, date: '21-1-2022', type: 1.0079, route: 'demo',shift:'Afternoon',fat:'high',degree:'A+',snf:'snf val',milk:'5000',rate:500000,amount:'20000',action:''},
  {srno: 5, date: '21-1-2022', type: 1.0079, route: 'demo',shift:'Morning',fat:'high',degree:'A+',snf:'snf val',milk:'5000',rate:500000,amount:'20000',action:''},
  
];


// right side table


export interface PeriodicElement3 {
  srno: number;
  bill_no: number;
  start_date: string;
  to_date: string;
  action: any;
}

const ELEMENT_DATA3: PeriodicElement3[] = [
  {srno: 1, bill_no: 21213, start_date: '9-11-2022', to_date: '9-12-2022',action: ''},
  {srno: 2, bill_no: 21213, start_date: '9-11-2022', to_date: '9-12-2022',action: ''},
  {srno: 3, bill_no: 21213, start_date: '9-11-2022', to_date: '9-12-2022',action: ''},
  {srno: 4, bill_no: 21213, start_date: '9-11-2022', to_date: '9-12-2022',action: ''},
  {srno: 5, bill_no: 21213, start_date: '9-11-2022', to_date: '9-12-2022',action: ''},
  
];