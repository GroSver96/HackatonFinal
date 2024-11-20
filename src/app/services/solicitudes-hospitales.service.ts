import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesHospitalesService {

  // Ruta de la colección de solicitudes para hospitales
  private basePath: string = '/ambulanceRequests'; // Actualizado a 'hospitalRequests' en lugar de 'ambulanceRequests'

  constructor(private db: AngularFirestore) {}

  // Obtener todos los registros de la colección hospitalRequests
  getSolicitudesHospitales(): Observable<any[]> {
    return this.db.collection(this.basePath).valueChanges();
  }

  // Aquí puedes agregar otros métodos para interactuar con Firebase según sea necesario
}
