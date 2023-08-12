import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { NewOrderPageComponent } from './pages/new-order-page/new-order-page.component';
import { ListOrderPageComponent } from './pages/list-order-page/list-order-page.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';

// localhost:4200/service-orders/
const routes: Routes = [
  {
    path: '',
    component: LayoutPagesComponent,
    children: [
      {
        path: 'new-order',
        component: NewOrderPageComponent
      },
      {
        path: 'list-order',
        component: ListOrderPageComponent
      },
      {
        path: 'edit-order/:id',
        component: NewOrderPageComponent
      },      
      {
        path: ':id',
        component: OrderPageComponent
      },
      {
        path: '**',
        redirectTo: 'list-order'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceOrdersRoutingModule { }
