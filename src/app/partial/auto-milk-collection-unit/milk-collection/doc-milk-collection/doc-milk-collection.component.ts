import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doc-milk-collection',
  templateUrl: './doc-milk-collection.component.html',
  styleUrls: ['./doc-milk-collection.component.scss']
})
export class DocMilkCollectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','quantity','Action'];
  dataSource = ELEMENT_DATA;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Microsoft', weight: 9922955666, symbol: 'Micro123@gmail.com',quantity:'b',Action:''},
  {position: 2, name: 'Wipro', weight: 7058942513, symbol: 'Wip856@gmail.com',quantity:'b',Action:''},
  {position: 3, name: 'Wipro', weight: 7058942513, symbol: 'Wip856@gmail.com',quantity:'b',Action:''},


];
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  Action:any;
  quantity:string;
}
