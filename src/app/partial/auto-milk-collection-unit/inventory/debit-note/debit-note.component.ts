import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SearchInventoryComponent } from '../search-inventory/search-inventory.component';

@Component({
  selector: 'app-debit-note',
  templateUrl: './debit-note.component.html',
  styleUrls: ['./debit-note.component.scss']
})
export class DebitNoteComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','Type','Quantity','FAT','Degree','Rate','Amount','CGST','Action'];
  dataSource = ELEMENT_DATA;


  Searchinventory(){
    const dialogRef = this.dialog.open(SearchInventoryComponent,{
      width: '500px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
  }

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
  CGST:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', Type:'ok',Quantity:'d',FAT:'ok',Degree:'btech',Rate:'five',Amount:50, CGST:'ok',Action:''},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', Type:'ok',Quantity:'d',FAT:'ok',Degree:'btech',Rate:'five',Amount:50, CGST:'ok',Action:''},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', Type:'ok',Quantity:'d',FAT:'ok',Degree:'btech',Rate:'five',Amount:50, CGST:'ok',Action:''},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', Type:'ok',Quantity:'d',FAT:'ok',Degree:'btech',Rate:'five',Amount:50, CGST:'ok',Action:''},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', Type:'ok',Quantity:'d',FAT:'ok',Degree:'btech',Rate:'five',Amount:50, CGST:'ok',Action:''},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', Type:'ok',Quantity:'d',FAT:'ok',Degree:'btech',Rate:'five',Amount:50, CGST:'ok',Action:''},
];