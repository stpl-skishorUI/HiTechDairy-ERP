import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.scss']
})
export class EmployeeRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['srno', 'employee_name', 'mobile_number', 'address','action'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  srno: number;
  employee_name: string;
  mobile_number: number;
  address: string;
  action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {srno: 1, employee_name: 'Ram ', mobile_number: 8669264767, address: 'Katraj',action: ''},
 
];

