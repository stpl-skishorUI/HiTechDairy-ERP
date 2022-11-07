import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-account-registration',
  templateUrl: './company-account-registration.component.html',
  styleUrls: ['./company-account-registration.component.scss']
})
export class CompanyAccountRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name','Action'];
  dataSource = ELEMENT_DATA;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Microsoft',Action:''},
  {position: 2, name: 'Wipro',Action:''},
  {position: 3, name: 'Wipro',Action:''},


];
export interface PeriodicElement {
  name: string;
  position: number;

  Action:any;
}
