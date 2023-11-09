import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';

@Component({
    selector: 'app-layout-pages',
    templateUrl: './layout-pages.component.html',
    styleUrls: ['./layout-pages.component.scss'],
    standalone: true,
    imports: [NavbarComponent, MatToolbarModule, MatIconModule, MatButtonModule, RouterOutlet]
})
export class LayoutPagesComponent {

}
