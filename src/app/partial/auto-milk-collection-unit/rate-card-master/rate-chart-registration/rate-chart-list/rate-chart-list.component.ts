import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate-chart-list',
  templateUrl: './rate-chart-list.component.html',
  styleUrls: ['./rate-chart-list.component.scss']
})
export class RateChartListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['from', 'to', 'rate', 'X'];
  dataSource = ELEMENT_DATA2;
}
export interface PeriodicElement {
  from: string;
  to: string;
  rate: number;
  X: string;
}

const ELEMENT_DATA2: PeriodicElement[] = [
  {from: '1', to: 'Hydro', rate: 1.0079, X: 'H'},
  {from: '1', to: 'Hydro', rate: 1.0079, X: 'H'},
  {from: '1', to: 'Hydro', rate: 1.0079, X: 'H'},
];