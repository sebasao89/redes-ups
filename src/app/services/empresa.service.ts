import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc } from '@angular/fire/firestore';
import Empresa from '../interfaces/empresa.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  // Inyectar el servicio de firestore
  constructor( private firestore: Firestore) { }

  getEmpresas():Observable<Empresa[]> {
    const empresaRef = collection(this.firestore, 'empresas')
    return collectionData(empresaRef, { idField: 'id' }) as Observable<Empresa[]>
  }

  addEmpresas( empresa: Empresa ) {
    const empresaRef = collection(this.firestore, 'empresas')
    return addDoc(empresaRef, empresa)
  }

}
