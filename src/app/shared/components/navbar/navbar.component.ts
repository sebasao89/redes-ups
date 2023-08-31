import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  public sidenavItems = [
    { label: 'dashboard',
      icon:'dashboard',
      url: '/dashboard',
      color: 'warn'
    },
    { label: 'Visitas tecnicas',
      icon:'build',
      url: '/service-orders',
      color: 'warn',
      submenu: [
        { label: 'Registrar',
          icon: 'add',
          url:"/service-orders/new-order",
          color: 'warn'
        },
        { label: 'Editar',
          icon: 'edit',
          url:"/service-orders/new-order",
          color: 'warn'
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
  
  

  

  // toggleSidenav() {
  //   this.isSidenavOpened = !this.isSidenavOpened;
  //   if (this.isSidenavOpened && window.innerWidth <= 768) {
  //     this.sidenav.open();
  //   }
  // }


  
}

  


