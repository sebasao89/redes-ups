import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceOrdersRoutingModule } from './service-orders-routing.module';
import { MaterialModule } from '../material/material.module';

import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { ListOrderPageComponent } from './pages/list-order-page/list-order-page.component';
import { NewOrderPageComponent } from './pages/new-order-page/new-order-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LayoutPagesComponent,
    OrderPageComponent,
    ListOrderPageComponent,
    NewOrderPageComponent,
  ],
  imports: [
    CommonModule,
    ServiceOrdersRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class ServiceOrdersModule { }
