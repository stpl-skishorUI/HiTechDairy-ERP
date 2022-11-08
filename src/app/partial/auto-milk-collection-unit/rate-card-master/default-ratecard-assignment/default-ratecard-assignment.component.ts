import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-ratecard-assignment',
  templateUrl: './default-ratecard-assignment.component.html',
  styleUrls: ['./default-ratecard-assignment.component.scss']
})
export class DefaultRatecardAssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['srno', 'ratecard_category', 'account_type', 'shift','ratecard_name', 'action'];
  dataSource = ELEMENT_DATA;

  ratecardcategory(){
    alert("hiii")
    
  }

}

export interface PeriodicElement {
  srno: number;
  ratecard_category: string;
  account_type: string;
  shift: string;
  ratecard_name: string;
  action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {srno: 1, ratecard_category: 'Collection At Dairy', account_type: 'Buffalo', shift: 'Day',ratecard_name:'Bufflao Ratecard Dairy',action:''},
  
];
