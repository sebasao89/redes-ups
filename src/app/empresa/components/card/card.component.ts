import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Empresa from 'src/app/interfaces/empresa.interface';
import { EmpresaService } from 'src/app/services/empresa.service';
import { TitleCasePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'empresa-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    standalone: true,
    imports: [MatCardModule, MatDividerModule, MatButtonModule, RouterLink, MatIconModule, TitleCasePipe]
})
export class CardComponent implements OnInit {

  @Input()
  public empresa!: Empresa

  constructor( public router: Router, public empresaService: EmpresaService) {}

  ngOnInit(): void {
    if ( !this.empresa ) throw Error('Propiedad empresa es requerida')
  }

  getEmpresaById(empresaId?: string) {
    this.router.navigate(['empresas/', empresaId])
    // this.empresaService.getEmpresaById(empresaId)
  }

}
