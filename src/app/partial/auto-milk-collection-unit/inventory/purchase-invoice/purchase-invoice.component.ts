import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SearchComponent } from 'src/app/partial/dialogs/search/search.component';

@Component({
  selector: 'app-purchase-invoice',
  templateUrl: './purchase-invoice.component.html',
  styleUrls: ['./purchase-invoice.component.scss']
})
export class PurchaseInvoiceComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['srno', 'material_name', 'hsn', 'inward_qty', 'unit', 'rate', 'sub_total', 'sgst', 'cgst', 'igst', 'discount', 'total', 'action'];
  dataSource = ELEMENT_DATA;

  searchinventory(){
    const dialogRef = this.dialog.open(SearchComponent,{
      width: '500px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
  }

}
export interface PeriodicElement {
  srno: number;
  material_name:string;
  hsn:string;
  inward_qty: number;
  unit: number;
  rate: number;
  sub_total:number;
  sgst: number;
  cgst: number;
  igst:number;
  discount:number;
  total: number;
  action:any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { srno:1,material_name:'AKARDOVF',hsn:'hsn demo val',inward_qty:100,unit:100,rate:100,sub_total:100,sgst:100,cgst:100,igst:100,discount:100,total:10000,action:'' },
 
];
