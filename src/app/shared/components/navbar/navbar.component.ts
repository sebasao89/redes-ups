import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: true,
    imports: [MatToolbarModule, MatButtonModule, MatTooltipModule, MatIconModule, MatSidenavModule, MatListModule, NgFor, RouterLink]
})
export class NavbarComponent implements OnInit{

  public sidenavItems = [
    { label: 'dashboard',
      icon:'space_dashboard',
      url: '/dashboard',
    },
    { label: 'Visitas tecnicas',
      icon:'engineering',
      url: '/service-orders',
      submenu: [
        { label: 'Registrar',
          icon: 'add',
          url:"/service-orders/new-order",
        },
        { label: 'Editar',
          icon: 'edit',
          url:"/service-orders/new-order", 
        },
      ]
    },
    { label: 'Empresas',
      icon:'apartment',
      url: '/empresas'
    }
  ]  
  
  constructor() {}

  ngOnInit(): void {
    this.updateSidenavState
  }

  public updateSidenavState() {
    if (window.innerWidth > 768) {
      return true
    } else {
      return false
    }
  }

  
}

  


