import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';


import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { LoginPagesComponent } from './pages/login-pages/login-pages.component';


@NgModule({
    imports: [
    CommonModule,
    AuthRoutingModule,
    LayoutPagesComponent,
    LoginPagesComponent
]
})
export class AuthModule { }
