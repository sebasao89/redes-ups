import { Routes } from '@angular/router';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { LoginPagesComponent } from './pages/login-pages/login-pages.component';

// localhost:4200/auth/''
export const routes: Routes = [
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

