import { Component, OnInit } from '@angular/core';
import { RateCardCategoryComponent } from './rate-card-category/rate-card-category.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-default-ratecard-assignment',
  templateUrl: './default-ratecard-assignment.component.html',
  styleUrls: ['./default-ratecard-assignment.component.scss']
})
export class DefaultRatecardAssignmentComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['srno', 'ratecard_category', 'account_type', 'shift','ratecard_name', 'action'];
  dataSource = ELEMENT_DATA;

  ratecardcategory(){
    const dialogRef = this.dialog.open(RateCardCategoryComponent,{
      width: '500px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    
  }

}

export interface PeriodicElement {
  srno: number;
  ratecard_category: string;
  account_type: string;
  shift: string;
  ratecard_name: string;
  action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {srno: 1, ratecard_category: 'Collection At Dairy', account_type: 'Buffalo', shift: 'Day',ratecard_name:'Bufflao Ratecard Dairy',action:''},
  
];
