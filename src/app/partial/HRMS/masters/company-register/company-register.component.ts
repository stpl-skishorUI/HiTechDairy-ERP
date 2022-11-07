import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-register',
  templateUrl: './company-register.component.html',
  styleUrls: ['./company-register.component.scss']
})
export class CompanyRegisterComponent implements OnInit {

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
  {position: 1, name: 'SAT Technosoft', weight:'Nitin Ghorte', corporation:'12/05/2000', symbol: 'H'},
  {position: 2, name: 'ATOS Technosoft', weight: 'Kindom Ruse', corporation:'04/32/1886', symbol: 'He'},
];
