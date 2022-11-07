import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-registration',
  templateUrl: './material-registration.component.html',
  styleUrls: ['./material-registration.component.scss']
})
export class MaterialRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','Description','Material','Action'];
  dataSource = ELEMENT_DATA;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Microsoft', weight: 250, symbol: '6', Description:'Milton',Material:'Copper',Action:''},
  {position: 2, name: 'Wipro', weight: 450, symbol: '4', Description:'Milton',Material:'Steel',Action:''},
  {position: 3, name: 'Wipro', weight: 720, symbol: '9', Description:'Milton',Material:'Copper',Action:''},


];
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  Description:string;
  Material:string;
  Action:any;
}
