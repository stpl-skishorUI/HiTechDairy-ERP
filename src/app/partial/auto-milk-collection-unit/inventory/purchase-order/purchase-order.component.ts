import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SearchInventoryComponent } from '../search-inventory/search-inventory.component';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.scss']
})
export class PurchaseOrderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['srno', 'material_name', 'hsn', 'quantity','unit','rate','sub_total','sgst','cgst','discount','total','x','action'];
  dataSource = ELEMENT_DATA;


  searchinventory(){
    const dialogRef = this.dialog.open(SearchInventoryComponent,{
      width: '500px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
  }


}

export interface PeriodicElement {
  srno: number;
  material_name: string;
  hsn: string;
  quantity: number;
  unit: string;
  rate: number;
  sub_total: number;
  sgst: number;
  cgst: number;
  discount: number;
  total: number;
  x: string;
  action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {srno: 1,material_name:'AKARO',hsn:'hsn val',quantity: 2,unit:'NO',rate: 280.0,sub_total:250.0,sgst:9,cgst:9,discount:2.80,total:277.70,x:'demo val',action: ''},
  {srno: 2,material_name:'AKARO',hsn:'hsn val',quantity: 2,unit:'NO',rate: 280.0,sub_total:250.0,sgst:9,cgst:9,discount:2.80,total:277.70,x:'demo val',action: ''},
  {srno: 3,material_name:'AKARO',hsn:'hsn val',quantity: 2,unit:'NO',rate: 280.0,sub_total:250.0,sgst:9,cgst:9,discount:2.80,total:277.70,x:'demo val',action: ''},
  {srno: 4,material_name:'AKARO',hsn:'hsn val',quantity: 2,unit:'NO',rate: 280.0,sub_total:250.0,sgst:9,cgst:9,discount:2.80,total:277.70,x:'demo val',action: ''},
  {srno: 5,material_name:'AKARO',hsn:'hsn val',quantity: 2,unit:'NO',rate: 280.0,sub_total:250.0,sgst:9,cgst:9,discount:2.80,total:277.70,x:'demo val',action: ''},
  {srno: 6,material_name:'AKARO',hsn:'hsn val',quantity: 2,unit:'NO',rate: 280.0,sub_total:250.0,sgst:9,cgst:9,discount:2.80,total:277.70,x:'demo val',action: ''},

];
