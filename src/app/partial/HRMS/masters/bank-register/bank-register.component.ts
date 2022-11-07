import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-register',
  templateUrl: './bank-register.component.html',
  styleUrls: ['./bank-register.component.scss']
})
export class BankRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'corporation','Branch' ,'symbol'];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  corporation:any;
  Branch:any;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'SBI', weight: 64104417253, corporation:'SBI00513', Branch:'Ashok Chowk', symbol: 'H'},
  {position: 2, name: 'BOI', weight: 44175698712, corporation:'MAHA1305', Branch:'Market Yard', symbol: 'He'},
];
