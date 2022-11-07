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
  {position: 1, name: 'Hydrogen', weight: 1.0079, corporation:'a', Branch:'b', symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, corporation:'a', Branch:'b', symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, corporation:'a', Branch:'b' ,symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, corporation:'a', Branch:'b', symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, corporation:'a', Branch:'b', symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, corporation:'a', Branch:'b', symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, corporation:'a', Branch:'b', symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, corporation:'a', Branch:'b', symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, corporation:'a', Branch:'b', symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, corporation:'a', Branch:'b', symbol: 'Ne'},
];
