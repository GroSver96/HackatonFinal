import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Firestore, doc, setDoc, collection, addDoc, getDoc } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(
    private afAuth: AngularFireAuth,
    private firestore: Firestore,
    private angularFirestore: AngularFirestore
  ) {}

  // Método para iniciar sesión
  async login(email: string, password: string): Promise<any> {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(email, password);
      return userCredential.user;
    } catch (error) {
      console.error('Error en login:', error);
      return null;
    }
  }

  // Método para registrar un nuevo usuario
  register(email: string, password: string, userData: any): Observable<any> {
    return from(
      this.afAuth.createUserWithEmailAndPassword(email, password)
        .then(async (credential) => {
          const userDocRef = doc(this.firestore, 'users', credential.user?.uid || '');
          try {
            await setDoc(userDocRef, {
              firstName: userData.firstName,
              lastName: userData.lastName,
              address: userData.address,
              email: email,
              bloodType: userData.bloodType,
              phone: userData.phone,
              role: userData.role || 'user',
            });
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

  // Método para solicitar una ambulancia
  requestAmbulance(requestData: any): Observable<any> {
    const ambulanceRequestsCollection = collection(this.firestore, 'ambulanceRequests');
    return from(addDoc(ambulanceRequestsCollection, requestData));
  }

  // Método para conseguir el nombre del usuario
  async getNombreUsuario(): Promise<string | null> {
    const user = await this.afAuth.currentUser; // Obtener el usuario autenticado
    if (user) {
      console.log('Usuario autenticado:', user.uid); // Agregar log para verificar el UID

      const userDocRef = doc(this.firestore, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        console.log('Documento de usuario encontrado:', userDoc.data()); // Verifica los datos del documento
        return userDoc.data()?.['firstName'] || null; // Usar la notación de corchetes para acceder a 'firstName'
      } else {
        console.log('El documento del usuario no existe.');
        return null; // Si el documento no existe, retornar null
      }
    } else {
      console.log('No hay un usuario autenticado.');
      return null;
    }
  }

  // Método para obtener datos del usuario por UID
  getUserData(uid: string): Observable<any> {
    return this.angularFirestore.collection('users').doc(uid).valueChanges();
  }

  
}
