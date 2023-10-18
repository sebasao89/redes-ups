import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, getDoc, addDoc} from '@angular/fire/firestore';
import Empresa from '../interfaces/empresa.interface';
import { Observable, catchError, from, map, of } from 'rxjs';

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

  getEmpresaById(empresaId: string): Observable<Empresa | undefined> {
    const empresaRef = doc(this.firestore, 'empresas', empresaId);

    return from(getDoc(empresaRef)).pipe(
      map((docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data() as Empresa;
          return data;
        } else {
          throw new Error("Documento no encontrado!");
          // catchError( error => of(undefined))
        }
      })
    );
  }

  addEmpresa(empresa: Empresa) {
    // addDoc(collection(this.firestore, 'empresas'), empresa)
    const empresaRef = collection(this.firestore, 'empresas')
    return addDoc(empresaRef, empresa)
  }

}
