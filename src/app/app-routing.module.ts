import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent
  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: 'service-orders',
    loadChildren: () => import('./service-orders/service-orders.module').then( m => m.ServiceOrdersModule)
  },
  {
    path: '404',
    component: Error404PageComponent
  },
  {
    path: 'service-orders',
    redirectTo: 'service-orders',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
