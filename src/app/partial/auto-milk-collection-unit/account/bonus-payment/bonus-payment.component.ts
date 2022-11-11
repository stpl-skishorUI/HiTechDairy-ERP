import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bonus-payment',
  templateUrl: './bonus-payment.component.html',
  styleUrls: ['./bonus-payment.component.scss']
})
export class BonusPaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['srno', 'party_name', 'retention_bonus', 'cow_milk','buffalo_milk','cow_bonus','buffalo_bonus','total_bonus','action'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
 srno: number;
 party_name: string;
 retention_name:string;
 cow_milk:string;
 buffalo_milk:string;
 cow_bonus:number;
 buffalo_bonus:number;
 total_bonus:number;
 action:any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {srno:1,party_name:'AKSDRFD',retention_name:'IT',cow_milk:'demo',buffalo_milk:'demo',cow_bonus:100,buffalo_bonus:1000,total_bonus:200,action: ''},
 
];