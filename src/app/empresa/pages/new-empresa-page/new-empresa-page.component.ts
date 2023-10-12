import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TipoDocumento } from 'src/app/interfaces/empresa.interface';

@Component({
  selector: 'app-new-empresa-page',
  templateUrl: './new-empresa-page.component.html',
  styleUrls: ['./new-empresa-page.component.scss']
})
export class NewEmpresaPageComponent {

  public empresaForm = new FormGroup({
    // id: new FormControl(''),
    tipoDocumento: new FormControl<TipoDocumento>( TipoDocumento.nit ),
    numDocumento: new FormControl<number>(0),
    digitoVerificacion: new FormControl<number>(0),
    nombre: new FormControl<string>(''),
    direccion: new FormControl<string>(''),
    telefono: new FormControl<string>(''),
    correo: new FormControl<string>(''),
    latitude: new FormControl<number>(0),
    longitude: new FormControl<number>(0),
    description: new FormControl<string>('')
  })

}
