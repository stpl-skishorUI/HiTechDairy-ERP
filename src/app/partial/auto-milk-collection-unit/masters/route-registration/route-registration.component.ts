import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-registration',
  templateUrl: './route-registration.component.html',
  styleUrls: ['./route-registration.component.scss']
})
export class RouteRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['srno', 'registration_route', 'type', 'route_name','action'];
  dataSource = ELEMENT_DATA;

}
export interface PeriodicElement {
  srno: number;
  registration_route: string;
  type: string;
  route_name: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {srno: 1, registration_route: 'Server', type: 'Hardware', route_name: 'demo',action: ''},
];
