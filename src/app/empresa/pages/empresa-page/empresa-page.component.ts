import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import Empresa from 'src/app/interfaces/empresa.interface';
import { EmpresaService } from 'src/app/services/empresa.service';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { NgIf } from '@angular/common';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';

@Component({
    selector: 'app-empresa-page',
    templateUrl: './empresa-page.component.html',
    styleUrls: ['./empresa-page.component.scss'],
    standalone: true,
    imports: [LoadingComponent, NgIf, MatCardModule, MatListModule]
})
export class EmpresaPageComponent implements OnInit {

  public empresa?: Empresa;

  constructor( private empresaService: EmpresaService, private activatedRoute: ActivatedRoute, private router: Router ) {}

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      delay(1000),
      switchMap( ({id}) => this.empresaService.getEmpresaById(id) ),
    )
    .subscribe(
      (empresa) => {
        if (!empresa) {
          this.router.navigate(['/empresas/list-empresas']);
        } else {
          // console.log(empresa);
          this.empresa = empresa
        }
      },
      (error) => {
        console.error('Error:', error);
        this.router.navigate(['/empresas/list-empresas']);
      }
    );

  }

  

}
