import { Type } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-milk-collection-list',
  templateUrl: './milk-collection-list.component.html',
  styleUrls: ['./milk-collection-list.component.scss']
})
export class MilkCollectionListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','Type','Quantity','FAT','Degree','Rate','Amount','Action'];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  Type:string;
  Quantity:string;
  FAT:string;
  Degree:string;
  Rate:string;
  Amount:number;
  Action:any
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', Type:'ok',Quantity:'d',FAT:'ok',Degree:'btech',Rate:'five',Amount:50,Action:''},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', Type:'ok',Quantity:'d',FAT:'ok',Degree:'btech',Rate:'five',Amount:50,Action:''},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', Type:'ok',Quantity:'d',FAT:'ok',Degree:'btech',Rate:'five',Amount:50,Action:''},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', Type:'ok',Quantity:'d',FAT:'ok',Degree:'btech',Rate:'five',Amount:50,Action:''},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', Type:'ok',Quantity:'d',FAT:'ok',Degree:'btech',Rate:'five',Amount:50,Action:''},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', Type:'ok',Quantity:'d',FAT:'ok',Degree:'btech',Rate:'five',Amount:50,Action:''},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', Type:'ok',Quantity:'d',FAT:'ok',Degree:'btech',Rate:'five',Amount:50,Action:''},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', Type:'ok',Quantity:'d',FAT:'ok',Degree:'btech',Rate:'five',Amount:50,Action:''},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', Type:'ok',Quantity:'d',FAT:'ok',Degree:'btech',Rate:'five',Amount:50,Action:''},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', Type:'ok',Quantity:'d',FAT:'ok',Degree:'btech',Rate:'five',Amount:50,Action:''},
];