import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Empresa, { TipoDocumento } from 'src/app/interfaces/empresa.interface';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-new-empresa-page',
  templateUrl: './new-empresa-page.component.html',
  styleUrls: ['./new-empresa-page.component.scss']
})
export class NewEmpresaPageComponent {

  constructor( public empresaService: EmpresaService ) {}

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
    const hero = this.empresaForm.value as Empresa
    return hero
  }

  async onSubmit() {
    // console.log({
    //   formIsValid: this.empresaForm.valid,
    //   value: this.empresaForm.value
    // })

    if( this.empresaForm.invalid ) return
    const response = await this.empresaService.addEmpresa(this.currentEmpresa)
    console.log(response)
  }

}
