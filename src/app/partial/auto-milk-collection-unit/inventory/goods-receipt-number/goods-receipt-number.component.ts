import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SearchInventoryComponent } from '../search-inventory/search-inventory.component';

@Component({
  selector: 'app-goods-receipt-number',
  templateUrl: './goods-receipt-number.component.html',
  styleUrls: ['./goods-receipt-number.component.scss']
})
export class GoodsReceiptNumberComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['srno', 'material_name', 'hsn', 'po_quantity','total_grn_qty','billed_qty','grn_qty','unit','action'];
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
  po_quantity:number;
  total_grn_qty: number;
  billed_qty: number;
  grn_qty: number;
  unit: number;
  action:any;
}

const ELEMENT_DATA: PeriodicElement[] = [
 {srno:1,material_name:'AKASRDO',hsn:'hsn demo val',po_quantity:100,total_grn_qty:100,billed_qty:100,grn_qty:100,unit:100,action: ''},
 {srno:2,material_name:'AKASRDO',hsn:'hsn demo val',po_quantity:100,total_grn_qty:100,billed_qty:100,grn_qty:100,unit:100,action: ''},
 {srno:3,material_name:'AKASRDO',hsn:'hsn demo val',po_quantity:100,total_grn_qty:100,billed_qty:100,grn_qty:100,unit:100,action: ''},
 {srno:4,material_name:'AKASRDO',hsn:'hsn demo val',po_quantity:100,total_grn_qty:100,billed_qty:100,grn_qty:100,unit:100,action: ''},
 {srno:5,material_name:'AKASRDO',hsn:'hsn demo val',po_quantity:100,total_grn_qty:100,billed_qty:100,grn_qty:100,unit:100,action: ''}
];
