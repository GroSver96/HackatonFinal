import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(
    private afAuth: AngularFireAuth,
    private firestore: Firestore
  ) {}

  // Método para iniciar sesión
  async login(email: string, password: string): Promise<any> {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(email, password);
      if (userCredential.user?.email && userCredential.user.email.endsWith('@institucion.com')) {
        return userCredential.user;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error en login de admin:", error);
      return null;
    }
  }

   // Método para registrar un hospital
  registerHospital(hospitalData: any): Observable<any> {
    const hospitalWithRole = {
      ...hospitalData,
      role: 'admin',
    };
    const hospitalCollection = collection(this.firestore, 'hospitals');
    return from(addDoc(hospitalCollection, hospitalWithRole));
}
}
