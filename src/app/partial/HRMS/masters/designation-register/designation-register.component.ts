import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-designation-register',
  templateUrl: './designation-register.component.html',
  styleUrls: ['./designation-register.component.scss']
})
export class DesignationRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'corporation' ,'symbol'];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  corporation:any;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'CEO', weight: 'Software', corporation:'Swargate', symbol: 'H'},
  {position: 2, name: 'Tester', weight: 'Software', corporation:'Katraj', symbol: 'He'},
];
