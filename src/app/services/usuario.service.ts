import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private afAuth: AngularFireAuth, private firestore: Firestore) {}

  // Método para iniciar sesión
  async login(email: string, password: string): Promise<any> {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(email, password);
      return userCredential.user;
    } catch (error) {
      console.error("Error en login:", error);
      return null;
    }
  }

  // Método para registrar un nuevo usuario
  register(email: string, password: string, userData: any): Observable<any> {
    return from(
      this.afAuth
        .createUserWithEmailAndPassword(email, password)
        .then(async (credential) => {
          try {
            const userDocRef = doc(this.firestore, 'users', credential.user?.uid || '');
            // Guardamos los datos del usuario en Firestore
            await setDoc(userDocRef, {
              firstName: userData.firstName,
              lastName: userData.lastName,
              address: userData.address,
              email: email,
              bloodType: userData.bloodType,
              phone: userData.phone,
              role: userData.role || 'user',
            });

            // Devolvemos un mensaje o un valor de éxito si todo salió bien
            return { success: true };
          } catch (error) {
            console.error('Error al guardar los datos en Firestore:', error);
            throw error;
          }
        })
        .catch((error) => {
          console.error('Error al registrar al usuario:', error);
          throw error;
        })
    );
  }
}