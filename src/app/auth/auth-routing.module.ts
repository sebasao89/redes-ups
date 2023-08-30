import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { LoginPagesComponent } from './pages/login-pages/login-pages.component';

// localhost:4200/auth/''
const routes: Routes = [
  {
    path:'',
    component: LayoutPagesComponent,
    children: [
      {
        path: 'login',
        component: LoginPagesComponent
      },
      {
        path: '**',
        redirectTo: 'login' 
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }