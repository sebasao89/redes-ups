import { Component, Input, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import Empresa from 'src/app/interfaces/empresa.interface';

@Component({
  selector: 'empresa-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  public empresa!: Empresa

  ngOnInit(): void {
    if ( !this.empresa ) throw Error('Propiedad empresa es requerida')
  }

}
