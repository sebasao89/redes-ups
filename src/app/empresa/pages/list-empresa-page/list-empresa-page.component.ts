import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import Empresa from 'src/app/interfaces/empresa.interface';
import { EmpresaService } from 'src/app/services/empresa.service';
import { Observable, delay, pipe } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-empresa-page',
  templateUrl: './list-empresa-page.component.html',
  styleUrls: ['./list-empresa-page.component.scss']
})
export class ListEmpresaPageComponent implements OnInit {

  public empresas: Empresa[] = [];
  // public dataSource = new MatTableDataSource<Empresa>();
  public columnas: string[] = ['nombre', 'numeroDocumento', 'direccion', 'telefono', 'Acciones'];
  public searchInput = new FormControl('');
  
  constructor( private empresasService: EmpresaService, private router: Router ) {}

  ngOnInit(): void {
    this.empresasService.getEmpresas().pipe(
      // delay(2000)
    ).subscribe( empresas => {
      // console.log(empresas)
      this.empresas = empresas
      // this.dataSource.data = empresas
    })
  }

  searchEmpresa(): void {
    const query = this.searchInput.value || "";

    console.log(query)
    
    // this.empresasService.searchEmpresa(query).pipe().subscribe(
    //   empresas => {
    //     this.empresas = empresas
    //   }
    // )
  }



}
