import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RateChartListComponent } from './rate-chart-list/rate-chart-list.component';

@Component({
  selector: 'app-rate-chart-registration',
  templateUrl: './rate-chart-registration.component.html',
  styleUrls: ['./rate-chart-registration.component.scss']
})
export class RateChartRegistrationComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name','Rate','Action'];
  dataSource = ELEMENT_DATA;



  displayedColumns2: string[] = ['from', 'to', 'rate', 'X'];
  dataSource2 = ELEMENT_DATA2;

  displayedColumns3: string[] = ['position', 'name',  'symbol'];
  dataSource3 = ELEMENT_DATA;

  ratechartlist(){
    const dialogRef = this.dialog.open(RateChartListComponent,{
      width: '500px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
  }

}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Credit',Rate:'ok',Action:''},
  {position: 2, name: 'Debit',Rate:'ok',Action:''},
  {position: 3, name: 'Slice',Rate:'ok',Action:''},


];
export interface PeriodicElement {
  name: string;
  position: number;
  Rate:string;
  Action:any;
}



export interface PeriodicElement2 {
  from: string;
  to: string;
  rate: number;
  X: string;
}

const ELEMENT_DATA2: PeriodicElement2[] = [
  {from: '1', to: 'Hydro', rate: 1.0079, X: 'H'},
  {from: '1', to: 'Hydro', rate: 1.0079, X: 'H'},
  {from: '1', to: 'Hydro', rate: 1.0079, X: 'H'},
];


export interface PeriodicElement3 {
  name: string;
  position: number;
 
  symbol: any;
}

const ELEMENT_DATA3: PeriodicElement3[] = [
  {position: 1, name: 'Hydrogen', symbol: 'H'},
  {position: 2, name: 'Helium',  symbol: 'He'},
];
