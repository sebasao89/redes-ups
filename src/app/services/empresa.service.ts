import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, getDoc, getDocs, addDoc, query, where} from '@angular/fire/firestore';
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

  // searchEmpresa(value: string): Observable<Empresa[]> {
  //   const empresaRef = collection(this.firestore, 'empresas');
  //   const q = query(empresaRef, where("nombre", "==", value))

    
  // }



}
