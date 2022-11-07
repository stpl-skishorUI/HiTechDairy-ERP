import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemIssueReturnFormComponent } from './item-issue-return-form/item-issue-return-form.component';

@Component({
  selector: 'app-item-issue-return',
  templateUrl: './item-issue-return.component.html',
  styleUrls: ['./item-issue-return.component.scss']
})
export class ItemIssueReturnComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(ItemIssueReturnFormComponent,{
    width: '500px',
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'ItemID', 'EmployeeName','IssueDate','ReturnDate','Action',];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  position: number;
  name: string;
  ItemID: any;
  EmployeeName: string;
  IssueDate:any;
  ReturnDate:any;
  Action:any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Software Department', ItemID: 12214, EmployeeName: 'Dhiraj Shukla',IssueDate:'2-11-2020',ReturnDate:'27-1-2021',Action:''},
  {position: 2, name: 'Software Department', ItemID: 12214, EmployeeName: 'Amit Shukla',IssueDate:'2-11-2020',ReturnDate:'27-1-2021',Action:''},
  {position: 3, name: 'Software Department', ItemID: 12214, EmployeeName: 'Dhiraj Verma',IssueDate:'2-11-2020',ReturnDate:'27-1-2021',Action:''},
  {position: 4, name: 'Software Department', ItemID: 12214, EmployeeName: 'Ankush Verma',IssueDate:'2-11-2020',ReturnDate:'27-1-2021',Action:''},
  {position: 5, name: 'Software Department', ItemID: 12214, EmployeeName: 'Dhiraj Shukla',IssueDate:'2-11-2020',ReturnDate:'27-1-2021',Action:''},
];

