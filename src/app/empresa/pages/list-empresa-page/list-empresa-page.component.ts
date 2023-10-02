import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-list-empresa-page',
  templateUrl: './list-empresa-page.component.html',
  styleUrls: ['./list-empresa-page.component.scss']
})
export class ListEmpresaPageComponent implements OnInit {

  constructor( private empresasService: EmpresaService) {}

  ngOnInit(): void {
    this.empresasService.getEmpresas().subscribe( empresas => {
      console.log(empresas)
    
    })
  }

}
