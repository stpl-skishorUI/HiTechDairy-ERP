import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrls: ['./account-management.component.scss']
})
export class AccountManagementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['srno', 'particulars', 'date', 'debit','credit','remark','action'];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  srno: number;
  particulars: string;
  date:string;
  debit:string;
  credit:string;
  remark:string;
  action:any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {srno:1,particulars:'particulars',date:'11-11-2022',debit:'debit val',credit:'credit val',remark:'Feedback',action:''},

];
