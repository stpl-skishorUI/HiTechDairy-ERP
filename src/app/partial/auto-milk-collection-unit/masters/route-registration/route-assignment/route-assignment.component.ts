import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-route-assignment',
  templateUrl: './route-assignment.component.html',
  styleUrls: ['./route-assignment.component.scss']
})
export class RouteAssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['srno', 'Route', 'village', 'action'];
  dataSource = ELEMENT_DATA;


  displayedColumns1: string[] = ['select', 'label'];
  dataSource1 = new MatTableDataSource<PeriodicElement1>(ELEMENT_DATA1);
  selection = new SelectionModel<PeriodicElement1>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource1.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource1.data);
  }

  checkboxLabel(row?: PeriodicElement1): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.label + 1}`;
  }


}
export interface PeriodicElement {
  srno: number;
  Route: string;
  village: string;
  action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {srno: 1, Route: 'Demo', village:'osmanabad', action: ''},
 
];


export interface PeriodicElement1 {
  label: string;
  
}
const ELEMENT_DATA1: PeriodicElement1[] = [
  {label: 'Route Name'},
  {label: 'Route Name-2'},
  {label: 'Route Name-3'},
  {label: 'Route Name-4'},
  {label: 'Route Name-5'},

];

