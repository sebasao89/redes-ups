import { NgModule } from '@angular/core';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { ServiceOrdersRoutingModule } from '../service-orders/service-orders-routing.module';


@NgModule({
  declarations: [
    Error404PageComponent,
    NavbarComponent
  ],
  imports: [
    MaterialModule,
    ServiceOrdersRoutingModule
  ],
  exports: [
    Error404PageComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
