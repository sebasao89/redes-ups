import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
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

  


