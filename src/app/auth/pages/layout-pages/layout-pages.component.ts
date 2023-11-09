import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-layout-pages',
    templateUrl: './layout-pages.component.html',
    styleUrls: ['./layout-pages.component.scss'],
    standalone: true,
    imports: [RouterOutlet]
})
export class LayoutPagesComponent {

}
