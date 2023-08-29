import { Component, ViewChild, AfterViewInit, HostListener, ChangeDetectorRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit{

  @ViewChild('sidenav') sidenav!: MatSidenav;

  isSidenavOpened = false; // Inicialmente cerrado en pantallas pequeñas

  constructor(private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.updateSidenavState();
    this.cdRef.detectChanges();
  }

  private updateSidenavState() {
    if (window.innerWidth > 768) {
      this.sidenav.open();
    } else {
      this.sidenav.close();
    }
  }

  toggleSidenav() {
    this.isSidenavOpened = !this.isSidenavOpened;
    if (this.isSidenavOpened && window.innerWidth <= 768) {
      this.sidenav.open();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateSidenavState();
    this.cdRef.detectChanges();
  }
  
}

  


