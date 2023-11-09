import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
    selector: 'app-layout-pages',
    templateUrl: './layout-pages.component.html',
    styleUrls: ['./layout-pages.component.scss'],
    standalone: true,
    imports: [NavbarComponent, MatToolbarModule, MatIconModule, MatButtonModule, RouterLink, RouterOutlet, MatSnackBarModule]
})
export class LayoutPagesComponent {

}
