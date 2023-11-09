import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceOrdersRoutingModule } from './service-orders-routing.module';



import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { ListOrderPageComponent } from './pages/list-order-page/list-order-page.component';
import { NewOrderPageComponent } from './pages/new-order-page/new-order-page.component';


@NgModule({
    imports: [
    CommonModule,
    ServiceOrdersRoutingModule,
    LayoutPagesComponent,
    OrderPageComponent,
    ListOrderPageComponent,
    NewOrderPageComponent
]
})
export class ServiceOrdersModule { }
