import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';


import { NavbarComponent } from './components/navbar/navbar.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';


@NgModule({
  declarations: [
    Error404PageComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule,
    MaterialModule,
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
