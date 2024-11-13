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

  // Método para iniciar sesión (verifica si es correo institucional)
  async login(email: string, password: string): Promise<any> {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(email, password);
      
      // Verificar si el correo pertenece a la institución (ejemplo: termina en @institucion.com)
      if (userCredential.user?.email && userCredential.user.email.endsWith('@institucion.com')) {
        // Aquí podemos agregar más lógica si lo deseas, como obtener los datos del hospital desde Firestore
        return userCredential.user; // Regresar el usuario autenticado
      } else {
        throw new Error('Correo no institucional');
      }
    } catch (error) {
      console.error('Error al iniciar sesión en admin:', error);
      throw error; // Lanzamos el error para que el componente lo maneje
    }
  }

  // Método para registrar un hospital y crear el usuario en Firebase Authentication
  registerHospital(hospitalData: any): Observable<any> {
    return new Observable((observer) => {
      // Crear usuario en Firebase Authentication
      this.afAuth.createUserWithEmailAndPassword(hospitalData.email, hospitalData.password)
        .then(async (userCredential) => {
          const user = userCredential.user;

          // Si el usuario se creó correctamente, guardar la información del hospital en Firestore
          const hospitalWithRole = {
            ...hospitalData,
            role: 'admin', // Rol por defecto
            uid: user?.uid // Guardar el UID del usuario de Firebase
          };

          const hospitalCollection = collection(this.firestore, 'hospitals');
          await addDoc(hospitalCollection, hospitalWithRole);

          observer.next('Hospital registrado con éxito');
          observer.complete();
        })
        .catch((error) => {
          console.error('Error al registrar el hospital:', error);
          observer.error(error); // Lanza el error si algo sale mal
        });
    });
  }
}
