import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Firestore, collection, addDoc, getDoc, doc, setDoc } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(
    private afAuth: AngularFireAuth,
    private firestore: Firestore
  ) {}

  // Método para iniciar sesión (verifica si es correo institucional y obtiene el rol)
  async login(email: string, password: string): Promise<any> {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(email, password);
  
      if (userCredential.user?.email && userCredential.user.email.endsWith('@institucion.com')) {
        const uid = userCredential.user.uid;
        console.log("UID del usuario autenticado:", uid);
  
        const userDocRef = doc(this.firestore, 'hospitals', uid);
        const userDoc = await getDoc(userDocRef);
        console.log("Datos del documento en 'hospitals':", userDoc.data());
  
        if (userDoc.exists() && userDoc.data()?.['role'] === 'admin') {
          return { user: userCredential.user, role: 'admin' };
        } else {
          throw new Error("El usuario no tiene permisos de administrador.");
        }
      } else {
        throw new Error('Correo no institucional');
      }
    } catch (error) {
      console.error('Error al iniciar sesión en admin:', (error as Error).message);
      throw error;
    }
  }
    
  

  // Método para registrar un hospital y crear el usuario en Firebase Authentication
  registerHospital(hospitalData: any): Observable<any> {
    return new Observable((observer) => {
      this.afAuth.createUserWithEmailAndPassword(hospitalData.email, hospitalData.password)
        .then(async (userCredential) => {
          const user = userCredential.user;
          if (user) {
            const hospitalWithRole = {
              ...hospitalData,
              role: 'admin'
            };
            console.log("Datos a guardar en 'hospitals':", hospitalWithRole);
  
            const hospitalDocRef = doc(this.firestore, 'hospitals', user.uid);
            await setDoc(hospitalDocRef, hospitalWithRole);
  
            observer.next('Hospital registrado con éxito');
            observer.complete();
          } else {
            throw new Error('No se pudo obtener el UID del usuario.');
          }
        })
        .catch((error) => {
          console.error('Error al registrar el hospital:', error.message);
          observer.error(error);
        });
    });
  }
  
}
