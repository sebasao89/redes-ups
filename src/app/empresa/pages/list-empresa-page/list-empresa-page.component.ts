import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import Empresa from 'src/app/interfaces/empresa.interface';
import { EmpresaService } from 'src/app/services/empresa.service';
import { Observable, delay, pipe } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { CardComponent } from '../../components/card/card.component';
import { NgIf, NgFor, JsonPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';

@Component({
    selector: 'app-list-empresa-page',
    templateUrl: './list-empresa-page.component.html',
    styleUrls: ['./list-empresa-page.component.scss'],
    standalone: true,
    imports: [LoadingComponent, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule, MatIconModule, NgIf, NgFor, CardComponent, JsonPipe]
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
    const vlrBuscar = this.searchInput.value || "";

    console.log(vlrBuscar)
    
    const empresasQuery = query(this.empresasService.empresasRef, where('nombre', '==', vlrBuscar));
    const querySnapshot = getDocs(empresasQuery);
    
    console.log(querySnapshot)
    // this.empresasService.searchEmpresa(query).pipe().subscribe(
    //   empresas => {
    //     this.empresas = empresas
    //   }
    // )
  }



}
