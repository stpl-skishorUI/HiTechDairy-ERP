import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-registration',
  templateUrl: './department-registration.component.html',
  styleUrls: ['./department-registration.component.scss']
})
export class DepartmentRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'corporation' ,'symbol'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: any;
  corporation:any;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Software', weight: 'Swargate', corporation:'TCS Technosoft', symbol: 'H'},
  {position: 2, name: 'Hardware', weight: 'Katraj', corporation:'Wall Hardware', symbol: 'He'},
];
