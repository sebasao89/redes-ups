import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, getDoc, addDoc} from '@angular/fire/firestore';
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

  async getEmpresaById(empresaId: string): Promise<Empresa> {
    const empresaRef = doc(this.firestore, 'empresas', empresaId);

    try {
        const docSnap = await getDoc(empresaRef);
        if (docSnap.exists()) {
            const data = docSnap.data() as Empresa;
            return data;
        } else {
            throw new Error("Documento no encontrado!");
        }
    } catch (error) {
        throw error;
    }
  }

  addEmpresa(empresa: Empresa) {
    addDoc(collection(this.firestore, 'empresas'), empresa)
  }

}
