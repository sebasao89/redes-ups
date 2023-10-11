import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, getDoc} from '@angular/fire/firestore';
import Empresa from '../interfaces/empresa.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  empresaById: Empresa[] = []

  // Inyectar el servicio de firestore
  constructor( private firestore: Firestore) { }

  getEmpresas():Observable<Empresa[]> {
    const empresaRef = collection(this.firestore, 'empresas')
    return collectionData(empresaRef, { idField: 'id' }) as Observable<Empresa[]>
  }

  getEmpresaById(empresaId: string) {
    const empresaRef = doc(this.firestore, 'empresas', empresaId)
    return getDoc(empresaRef)
  }

}
