import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branch-registration',
  templateUrl: './branch-registration.component.html',
  styleUrls: ['./branch-registration.component.scss']
})
export class BranchRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'corporation' ,'symbol'];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  corporation:any;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, corporation:'a', symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, corporation:'a', symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, corporation:'a', symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, corporation:'a', symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, corporation:'a', symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, corporation:'a', symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, corporation:'a', symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, corporation:'a', symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, corporation:'a', symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, corporation:'a', symbol: 'Ne'},
];
