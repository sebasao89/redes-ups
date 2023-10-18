import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Empresa from 'src/app/interfaces/empresa.interface';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'empresa-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
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
