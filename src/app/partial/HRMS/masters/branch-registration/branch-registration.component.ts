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
  weight: any;
  corporation:any;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Swargate', weight: 'SATRO Technosoft', corporation:'Pune', symbol: 'H'},
  {position: 2, name: 'Dhankawdi', weight: 'Read PVT', corporation:'Karnataka', symbol: 'He'},
];
