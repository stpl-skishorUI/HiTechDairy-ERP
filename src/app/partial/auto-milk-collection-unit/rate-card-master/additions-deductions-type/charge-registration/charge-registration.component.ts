import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charge-registration',
  templateUrl: './charge-registration.component.html',
  styleUrls: ['./charge-registration.component.scss']
})
export class ChargeRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['srno', 'charge_name', 'action'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  srno: number;
  charge_name: string;
  action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {srno: 1, charge_name: 'Bonus', action: ''}
];