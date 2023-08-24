import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceOrdersRoutingModule } from './service-orders-routing.module';
import { MaterialModule } from '../material/material.module';

import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { ListOrderPageComponent } from './pages/list-order-page/list-order-page.component';
import { NewOrderPageComponent } from './pages/new-order-page/new-order-page.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';


@NgModule({
  declarations: [
    LayoutPagesComponent,
    OrderPageComponent,
    ListOrderPageComponent,
    NewOrderPageComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ServiceOrdersRoutingModule,
    MaterialModule
  ]
})
export class ServiceOrdersModule { }
