import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Order } from '../interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor( private firestore: Firestore) { }

  addOrder( order: Order) {
    const orderRef = collection(this.firestore,'orders')
    return addDoc(orderRef, order)
  }
}
