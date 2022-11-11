import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batch-process',
  templateUrl: './batch-process.component.html',
  styleUrls: ['./batch-process.component.scss']
})
export class BatchProcessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['srno', 'material_name', 'unit', 'outward_qty','rate','total_amt','action'];
  dataSource = ELEMENT_DATA;

  displayedColumns2: string[] = ['srno', 'service', 'rate', 'unit','action'];
  dataSource2 = ELEMENT_DATA2;
}

export interface PeriodicElement {
  srno: number;
  material_name:string;
  unit:number;
  outward_qty:number;
  rate:number;
  total_amt: number;
  action:any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {srno:1,material_name:'AKARO',unit:100,outward_qty:100,rate:100,total_amt:100,action: ''}
 
];


export interface PeriodicElement2 {
  srno: number;
  service: string;
  rate: number;
  unit:number;
  action:any;
}

const ELEMENT_DATA2: PeriodicElement2[] = [
  {srno:1,service:'service data',rate:100,unit:100,action: ''},
  
];