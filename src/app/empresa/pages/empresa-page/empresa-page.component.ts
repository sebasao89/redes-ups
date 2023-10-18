import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import Empresa from 'src/app/interfaces/empresa.interface';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-empresa-page',
  templateUrl: './empresa-page.component.html',
  styleUrls: ['./empresa-page.component.scss']
})
export class EmpresaPageComponent implements OnInit {

  public empresa?: Empresa;

  constructor( private empresaService: EmpresaService, private activatedRoute: ActivatedRoute, private router: Router ) {}

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.empresaService.getEmpresaById(id) ),
    )
    .subscribe(
      (empresa) => {
        if (!empresa) {
          this.router.navigate(['/empresas/list-empresas']);
        } else {
          // console.log(empresa);
        }
      },
      (error) => {
        console.error('Error:', error);
        this.router.navigate(['/empresas/list-empresas']);
      }
    );

  }

  

}
