import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import Empresa, { TipoDocumento } from 'src/app/interfaces/empresa.interface';
import { EmpresaService } from 'src/app/services/empresa.service';

import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-new-empresa-page',
  templateUrl: './new-empresa-page.component.html',
  styleUrls: ['./new-empresa-page.component.scss']
})
export class NewEmpresaPageComponent {

  constructor( public empresaService: EmpresaService, private snackBar: MatSnackBar, private router: Router ) {}

  public empresaForm = new FormGroup({
    id: new FormControl(),
    tipoDocumento: new FormControl<TipoDocumento>( TipoDocumento.nit ),
    numDocumento: new FormControl(),
    digitoVerificacion: new FormControl(),
    nombre: new FormControl<string>(''),
    direccion: new FormControl<string>(''),
    telefono: new FormControl<string>(''),
    correo: new FormControl<string>(''),
    latitude: new FormControl(),
    longitude: new FormControl(),
    descripcion: new FormControl<string>('')
  })

  get currentEmpresa(): Empresa {
    const empresa = this.empresaForm.value as Empresa
    return empresa
  }

  async onSubmit() {
    // console.log({
    //   formIsValid: this.empresaForm.valid,
    //   value: this.empresaForm.value
    // })

    if( this.empresaForm.invalid ) return
    const response = await this.empresaService.addEmpresa(this.currentEmpresa)
    // console.log(response)
    if (response) {
      this.empresaForm.reset()
      this.openSnackBar('Empresa añadida', 'X' )
      setTimeout(() => {
        this.router.navigate(['/empresas/list-empresas']);
      }, 2000);
    } else {
      this.openSnackBar('Error al añadir', "X")
    
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2500,
    });
  }

  

}
