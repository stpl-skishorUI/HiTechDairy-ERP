import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batch-register',
  templateUrl: './batch-register.component.html',
  styleUrls: ['./batch-register.component.scss']
})
export class BatchRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['srno', 'batch', 'batch_name_template','action'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
 srno: number;
 batch: string;
 batch_name_template: string;
 action:any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {srno:1,batch:'batch string',batch_name_template:'Btach template name',action:''},
 
];