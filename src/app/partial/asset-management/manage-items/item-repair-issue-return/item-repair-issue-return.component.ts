import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ItemRepairIssueReturnFormComponent} from './item-repair-issue-return-form/item-repair-issue-return-form.component';

@Component({
  selector: 'app-item-repair-issue-return',
  templateUrl: './item-repair-issue-return.component.html',
  styleUrls: ['./item-repair-issue-return.component.scss']
})
export class ItemRepairIssueReturnComponent implements OnInit {

  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'vendor_name', 'rep_issue_date','return','Action'];
  dataSource = ELEMENT_DATA;


  
  repreturnform(){
    const dialogRef = this.dialog.open(ItemRepairIssueReturnFormComponent,{
      width: '600px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
  }

}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Mechanical Engineering', vendor_name: 'Ankush', rep_issue_date: '16-1-2022',return:'16-12-2022',Action:''},
  {position: 2, name: 'Mechanical Engineering', vendor_name: 'Ankush', rep_issue_date: '16-1-2022',return:'16-12-2022',Action:''},
  {position: 3, name: 'Mechanical Engineering', vendor_name: 'Ankush', rep_issue_date: '16-1-2022',return:'16-12-2022',Action:''},
  {position: 4, name: 'Mechanical Engineering', vendor_name: 'Ankush', rep_issue_date: '16-1-2022',return:'16-12-2022',Action:''},
  {position: 5, name: 'Mechanical Engineering', vendor_name: 'Ankush', rep_issue_date: '16-1-2022',return:'16-12-2022',Action:''},
  

];
export interface PeriodicElement {
  name: string;
  position: number;
  vendor_name: string;
  rep_issue_date: string;
  return:string;
  Action:any;
}
