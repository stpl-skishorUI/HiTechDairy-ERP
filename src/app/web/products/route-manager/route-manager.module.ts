import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteManagerRoutingModule } from './route-manager-routing.module';
import { RouteManagerComponent } from './route-manager.component';


@NgModule({
  declarations: [
    RouteManagerComponent
  ],
  imports: [
    CommonModule,
    RouteManagerRoutingModule
  ]
})
export class RouteManagerModule { }
