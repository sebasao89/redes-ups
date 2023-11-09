import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-login-pages',
    templateUrl: './login-pages.component.html',
    styleUrls: ['./login-pages.component.scss'],
    standalone: true,
    imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule]
})
export class LoginPagesComponent {

}
