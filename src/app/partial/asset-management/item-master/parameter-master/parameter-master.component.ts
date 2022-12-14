import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parameter-master',
  templateUrl: './parameter-master.component.html',
  styleUrls: ['./parameter-master.component.scss']
})
export class ParameterMasterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['srno', 'parameter_name', 'action'];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  srno: number;
  parameter_name: string;
  action: any;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {srno: 1, parameter_name: 'Keyboard', action:''},
  {srno: 2, parameter_name: 'CPU', action:''},
  {srno: 3, parameter_name: 'Mouse', action:''},
 
];