import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChargeCategoryComponent } from './charge-category/charge-category.component';
import { CollectionTypeComponent } from './collection-type/collection-type.component';

@Component({
  selector: 'app-additions-deductions-charges',
  templateUrl: './additions-deductions-charges.component.html',
  styleUrls: ['./additions-deductions-charges.component.scss']
})
export class AdditionsDeductionsChargesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = [ 'charge_category', 'rate', 'Unit', 'retention','X','action'];
  dataSource = ELEMENT_DATA;

  displayedColumns2: string[] = ['collection_type','action'];
  dataSource2 = ELEMENT_DATA2;

  displayedColumns3: string[] = ['charge_category', 'rate', 'Unit', 'retention','X','action'];
  dataSource3 = ELEMENT_DATA3;

  collectiontype(){
    const dialogRef = this.dialog.open(CollectionTypeComponent,{
      width: '500px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
  }

  chargeCategory(){
    const dialogRef = this.dialog.open(ChargeCategoryComponent,{
      width: '500px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
  }

}
export interface PeriodicElement {
  
  charge_category: string;
  rate: number;
  Unit: number;
  retention: string;
  X: string;
  action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { charge_category: 'Hydrogen', rate: 1, Unit: 10,retention:'Retention',X:'Value ',action: ''}
];



export interface PeriodicElement2 {
  collection_type: string;
  action: any;

}

const ELEMENT_DATA2: PeriodicElement2[] = [
  { collection_type: 'Collection At Dairy',action: ''},
 
];


// Buffalo
export interface PeriodicElement {
  charge_category: string;
  rate: number;
  Unit: number;
  retention: string;
  X: string;
  action: any;
}

const ELEMENT_DATA3: PeriodicElement[] = [
  { charge_category: 'Collection At Dairy', rate: 1, Unit: 10,retention:'Retention',X:'Value ',action: ''}
 
];