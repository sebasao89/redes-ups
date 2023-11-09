import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EmpresaRoutingModule } from './empresa-routing.module';



import { LayoutPagesComponent } from './pages/layout-pages/layout-pages.component';
import { ListEmpresaPageComponent } from './pages/list-empresa-page/list-empresa-page.component';
import { NewEmpresaPageComponent } from './pages/new-empresa-page/new-empresa-page.component';
import { EmpresaPageComponent } from './pages/empresa-page/empresa-page.component';
import { CardComponent } from './components/card/card.component';
import { LoadingComponent } from '../shared/components/loading/loading.component';


@NgModule({
    imports: [
    CommonModule,
    ReactiveFormsModule,
    EmpresaRoutingModule,
    LayoutPagesComponent,
    ListEmpresaPageComponent,
    NewEmpresaPageComponent,
    EmpresaPageComponent,
    CardComponent,
    LoadingComponent
]
})
export class EmpresaModule { }
