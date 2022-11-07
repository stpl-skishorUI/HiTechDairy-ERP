import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization-register',
  templateUrl: './organization-register.component.html',
  styleUrls: ['./organization-register.component.scss']
})
export class OrganizationRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'TATA PVT', weight: '25/10/1995', symbol: 'H'},
  {position: 2, name: 'Birla CMT', weight: '12/10/2016', symbol: 'He'}
];
