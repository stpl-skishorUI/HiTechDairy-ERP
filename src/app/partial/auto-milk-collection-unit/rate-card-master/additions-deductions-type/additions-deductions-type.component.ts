import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChargeRegistrationComponent } from './charge-registration/charge-registration.component';

@Component({
  selector: 'app-additions-deductions-type',
  templateUrl: './additions-deductions-type.component.html',
  styleUrls: ['./additions-deductions-type.component.scss']
})
export class AdditionsDeductionsTypeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
  }
  displayedColumns: string[] = ['srno', 'charge_category', 'account_type', 'type', 'unit','retention', 'action'];
  dataSource = ELEMENT_DATA;


  chargeRegis(){
    const dialogRef = this.dialog.open(ChargeRegistrationComponent,{
      width: '500px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    
  }

}
export interface PeriodicElement {
  srno: number;
  charge_category: string;
  account_type: number;
  type: string;
  unit: string;
  retention: string;
  action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {srno: 1, charge_category: 'Hydrogen', account_type: 1.0079, type: 'H',unit: 'Rs/Litre',retention:'yes', action: ''},
  
];
