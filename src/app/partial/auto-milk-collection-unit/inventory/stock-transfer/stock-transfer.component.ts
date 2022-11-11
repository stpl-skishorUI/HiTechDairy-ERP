import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SearchComponent } from 'src/app/partial/dialogs/search/search.component';

@Component({
  selector: 'app-stock-transfer',
  templateUrl: './stock-transfer.component.html',
  styleUrls: ['./stock-transfer.component.scss']
})
export class StockTransferComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  Searchinventory(){
    const dialogRef = this.dialog.open(SearchComponent,{
      width: '500px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
  }


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','Action'];
  dataSource = ELEMENT_DATA;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Microsoft', weight: 9922955666, symbol: 'Micro123@gmail.com',Action:''},
  {position: 2, name: 'Wipro', weight: 7058942513, symbol: 'Wip856@gmail.com',Action:''},
  {position: 3, name: 'Wipro', weight: 7058942513, symbol: 'Wip856@gmail.com',Action:''},


];
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  Action:any;

}
