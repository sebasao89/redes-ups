import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import Empresa from 'src/app/interfaces/empresa.interface';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-list-empresa-page',
  templateUrl: './list-empresa-page.component.html',
  styleUrls: ['./list-empresa-page.component.scss']
})
export class ListEmpresaPageComponent implements OnInit {

  public empresas: Empresa[] = [];
  public dataSource = new MatTableDataSource<Empresa>();
  public columnas: string[] = ['nombre', 'numeroDocumento', 'direccion', 'telefono', 'Acciones'];
  
  constructor( private empresasService: EmpresaService, private router: Router) {}

  ngOnInit(): void {
    this.empresasService.getEmpresas().subscribe( empresas => {
      console.log(empresas)
      // this.empresas = empresas
      this.dataSource.data = empresas
    })
  }

  verDetalle(id: string) {
    this.router.navigate(['empresas/',id])
  }

}
