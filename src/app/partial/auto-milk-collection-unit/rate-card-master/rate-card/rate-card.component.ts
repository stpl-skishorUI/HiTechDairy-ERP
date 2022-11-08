import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate-card',
  templateUrl: './rate-card.component.html',
  styleUrls: ['./rate-card.component.scss']
})
export class RateCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name','Action'];
  dataSource = ELEMENT_DATA;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Credit',Action:''},
  {position: 2, name: 'Debit',Action:''},
  {position: 3, name: 'slice',Action:''},


];
export interface PeriodicElement {
  name: string;
  position: number;

  Action:any;
}
