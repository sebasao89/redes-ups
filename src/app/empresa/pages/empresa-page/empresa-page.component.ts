import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Empresa from 'src/app/interfaces/empresa.interface';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-empresa-page',
  templateUrl: './empresa-page.component.html',
  styleUrls: ['./empresa-page.component.scss']
})
export class EmpresaPageComponent implements OnInit {

  public empresaId: string | null = ""

  constructor( private empresaService: EmpresaService, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {

    this.activeRoute.paramMap.subscribe(async (params) => {
        const id = params.get('id');
        this.empresaId = id !== null ? id : '';

        try {
            const empresaData = await this.empresaService.getEmpresaById(this.empresaId);
            console.log(empresaData);
        } catch (error) {
            console.error(error);
        }
    });


  }

  

}
