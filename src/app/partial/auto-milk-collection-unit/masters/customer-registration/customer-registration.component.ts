import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.scss']
})
export class CustomerRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['srno', 'party_name', 'address', 'mobile_no','account_no','route_name'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  srno: number;
  party_name: string;
  address: string;
  mobile_no: number;
  account_no: number;
  route_name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {srno: 1, party_name: 'Prasad UI', address: 'Katraj', mobile_no: 8669264767,account_no:123456789052149,route_name: 'Route Name'},
  {srno: 2, party_name: 'Prasad UI', address: 'Katraj', mobile_no: 8669264767,account_no:123456789052149,route_name: 'Route Name'},
  {srno: 3, party_name: 'Prasad UI', address: 'Katraj', mobile_no: 8669264767,account_no:123456789052149,route_name: 'Route Name'},
  {srno: 4, party_name: 'Prasad UI', address: 'Katraj', mobile_no: 8669264767,account_no:123456789052149,route_name: 'Route Name'},
  {srno: 5, party_name: 'Prasad UI', address: 'Katraj', mobile_no: 8669264767,account_no:123456789052149,route_name: 'Route Name'}
 
];