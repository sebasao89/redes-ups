import { Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

export const routes: Routes = [
    {
      path:'auth',
      loadChildren: () => import('./auth/auth.routes').then( m => m.routes)
    },
    {
      path: 'service-orders',
      loadChildren: () => import('./service-orders/service-orders.routes').then( m => m.routes)
    },
    {
      path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.routes').then( m => m.routes)
    },
    {
      path: 'empresas',
      loadChildren: () => import('./empresa/empresa.routes').then( m => m.routes)
    },
    {
      path: '404',
      component: Error404PageComponent
    },
    {
      path: '',
      redirectTo: 'empresas',
      pathMatch: 'full'
    },
    {
      path: '**',
      redirectTo: '404'
    }
  ];