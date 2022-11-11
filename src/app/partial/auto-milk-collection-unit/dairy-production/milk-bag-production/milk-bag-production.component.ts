import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-milk-bag-production',
  templateUrl: './milk-bag-production.component.html',
  styleUrls: ['./milk-bag-production.component.scss']
})
export class MilkBagProductionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['srno', 'material_name', 'hsn', 'quantity','unit','rate','action'];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  srno: number;
  material_name:string;
  hsn:string;
  quantity:number;
  unit:string;
  rate:number;
  action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {srno: 1,material_name:'AKARO',hsn :'hsn val',quantity: 2,unit:'NO',rate: 280.0,action: ''},
  {srno: 2,material_name:'AKARO',hsn:'hsn val',quantity: 2,unit:'NO',rate: 280.0,action: ''},
  {srno: 3,material_name:'AKARO',hsn:'hsn val',quantity: 2,unit:'NO',rate: 280.0,action: ''},
  {srno: 4,material_name:'AKARO',hsn:'hsn val',quantity: 2,unit:'NO',rate: 280.0,action: ''},
  {srno: 5,material_name:'AKARO',hsn:'hsn val',quantity: 2,unit:'NO',rate: 280.0,action: ''},
  {srno: 6,material_name:'AKARO',hsn:'hsn val',quantity: 2,unit:'NO',rate: 280.0,action: ''},

];
