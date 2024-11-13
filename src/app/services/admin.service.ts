// admin.service.ts
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private afAuth: AngularFireAuth) {}

  // Método para iniciar sesión
  async login(email: string, password: string): Promise<any> {
    try {
      // Inicia sesión con las credenciales de Firebase
      const userCredential = await this.afAuth.signInWithEmailAndPassword(email, password);
      
      // Aquí puedes realizar una verificación adicional para asegurarte de que el correo sea institucional, si es necesario
      if (userCredential.user?.email && userCredential.user.email.endsWith('@institucion.com')) {
        return userCredential.user; // Retorna el administrador si el login es exitoso
      } else {
        return null; // Si el correo no corresponde a un administrador institucional
      }
    } catch (error) {
      console.error("Error en login de admin:", error);
      return null; // Retorna null si las credenciales son incorrectas
    }
  }
}
