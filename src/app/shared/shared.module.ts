import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
