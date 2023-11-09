import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './pages/layout/layout.component';




@NgModule({
    imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutComponent
]
})
export class DashboardModule { }
