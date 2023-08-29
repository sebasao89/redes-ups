import { NgModule } from '@angular/core';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    Error404PageComponent,
    NavbarComponent
  ],
  imports: [
    MaterialModule,
  ],
  exports: [
    Error404PageComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
