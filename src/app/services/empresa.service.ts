import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, getDoc, addDoc, query, where} from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import Empresa from '../interfaces/empresa.interface';
import { Observable, from, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  public empresasRef = collection(this.firestore, 'empresas')
  empresaById: Empresa[] = []

  // Inyectar el servicio de firestore
  constructor( private firestore: Firestore) { }

  getEmpresas():Observable<Empresa[]> {
    return collectionData(this.empresasRef, { idField: 'id' }) as Observable<Empresa[]>
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
    return addDoc(this.empresasRef, empresa)
  }

  // searchEmpresa(nombre: string): Observable<Empresa[]> {
  //   return this.firestore.collection<Empresa>('empresas', ref => ref.where('nombre', '==', nombre)).valueChanges({ idField: 'id' });
  // }
  

}
