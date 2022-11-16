import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['srno', 'registration_route', 'type', 'route_name','Department_name','action'];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  srno: number;
  registration_route: string;
  type: string;
  route_name: string;
  Department_name:string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {srno: 1, registration_route: 'Server', type: 'Hardware', route_name: 'demo',Department_name:'ok',action: ''},
];
