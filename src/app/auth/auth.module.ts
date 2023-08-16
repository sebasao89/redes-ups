import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module';

import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { LoginPagesComponent } from './pages/login-pages/login-pages.component';


@NgModule({
  declarations: [
    LayoutPagesComponent,
    LoginPagesComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule { }
