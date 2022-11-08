import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-type',
  templateUrl: './collection-type.component.html',
  styleUrls: ['./collection-type.component.scss']
})
export class CollectionTypeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['collectiontype','action'];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  collectiontype: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {collectiontype: 'Collection At Dairy', action:''},
 
];
