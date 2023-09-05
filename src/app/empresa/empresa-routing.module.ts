import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { NewEmpresaPageComponent } from './pages/new-empresa-page/new-empresa-page.component';
import { ListEmpresaPageComponent } from './pages/list-empresa-page/list-empresa-page.component';
import { EmpresaPageComponent } from './pages/empresa-page/empresa-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPagesComponent,
    children: [
      {
        path: 'new-empresa',
        component: NewEmpresaPageComponent
      },
      {
        path: 'list-empresas',
        component: ListEmpresaPageComponent
      },
      {
        path: 'edit-order/:id',
        component: NewEmpresaPageComponent
      },      
      {
        path: ':id',
        component: EmpresaPageComponent
      },
      {
        path: '**',
        redirectTo: 'list-empresas'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaRoutingModule { }
