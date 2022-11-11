import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-payment',
  templateUrl: './group-payment.component.html',
  styleUrls: ['./group-payment.component.scss']
})
export class GroupPaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['srno', 'party_name', 'bill_no', 'amount','bank_name','branch_name','ifsc_code','bank_accnt_no','accnt_no', 'action'];
  dataSource = ELEMENT_DATA;

  displayedColumns2: string[] = ['srno', 'payment_date', 'from_date', 'to_date','total_cust','total_amt','pay_process', 'action'];
  dataSource2 = ELEMENT_DATA2;
}

export interface PeriodicElement {
  srno: number;
  party_name: string;
  bill_no:number;
  amount:number;
  bank_name:string;
  branch_name:string;
  ifsc_code: string;
  bank_accnt_no: number;
  accnt_no:number;
  action:any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {srno:1,party_name:'AKSDRFD',bill_no:1234,amount:1234552,bank_name:'BOI',branch_name:'swargate',ifsc_code:'BKI0005253',bank_accnt_no:12345678,accnt_no:12345678,  action:''},
 
];



export interface PeriodicElement2 {
 srno: number;
 payment_date: string;
 from_date:string;
 to_date:string;
 total_cust:string;
 total_amt: number;
 pay_process: string;
 action: any;
}

const ELEMENT_DATA2: PeriodicElement2[] = [
  {srno:1,payment_date:'11-11-2022',from_date:'11-11-2022',to_date:'11-11-2022',total_cust: '2',total_amt:25000,pay_process:'yes',  action: ''},
  
];