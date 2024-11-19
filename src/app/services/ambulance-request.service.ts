import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmbulanceRequestService {
  constructor(private firestore: AngularFirestore) {}

  // Obtener todas las solicitudes
  getAllRequests(): Observable<any[]> {
    return this.firestore.collection('ambulanceRequests').snapshotChanges();
  }

  // Agregar una nueva solicitud
  addRequest(newRequest: any): Promise<void> {
    const id = this.firestore.createId(); // Crear un ID único
    return this.firestore.collection('ambulanceRequests').doc(id).set(newRequest); // Establecer el documento con ese ID
  }

  // Actualizar una solicitud existente
  updateRequest(id: string, updatedRequest: any): Promise<void> {
    return this.firestore.collection('ambulanceRequests').doc(id).update(updatedRequest);
  }

  // Eliminar una solicitud
  deleteRequest(id: string): Promise<void> {
    return this.firestore.collection('ambulanceRequests').doc(id).delete();
  }
}
