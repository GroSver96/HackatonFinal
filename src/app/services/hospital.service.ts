import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Asegúrate de que esta importación sea correcta
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private firestore: AngularFirestore) { }

  // Método para obtener todos los hospitales
  getHospitals(): Observable<any[]> {
    return this.firestore.collection('hospitals').valueChanges();
  }
  
}
