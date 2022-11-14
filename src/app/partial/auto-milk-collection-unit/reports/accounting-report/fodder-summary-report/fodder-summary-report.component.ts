import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fodder-summary-report',
  templateUrl: './fodder-summary-report.component.html',
  styleUrls: ['./fodder-summary-report.component.scss']
})
export class FodderSummaryReportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','Debit','commission','commissionrs','Action'];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  commission:number;
  commissionrs:number;
  Debit:string;
  Action:any;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Microsoft', weight: 9922955666, symbol: 'Micro123@gmail.com',Debit:'yes',commission:50,commissionrs:25,Action:''},
  {position: 2, name: 'Wipro', weight: 7058942513, symbol: 'Wip856@gmail.com',Debit:'yes',commission:50,commissionrs:25,Action:''},
  {position: 3, name: 'Wipro', weight: 7058942513, symbol: 'Wip856@gmail.com',Debit:'yes',commission:50,commissionrs:25,Action:''},


];