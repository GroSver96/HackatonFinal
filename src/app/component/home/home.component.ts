import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Firestore, doc, getDoc } from '@angular/fire/firestore'; // Para obtener el rol desde Firestore

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userRole: string = ''; // Almacena el rol del usuario
  userName: string = ''; // Almacena el nombre del usuario
  isAdmin: boolean = false; // Para saber si el usuario es administrador
  isParamedico: boolean = false; // Para saber si el usuario es paramédico

  constructor(private router: Router, private afAuth: AngularFireAuth, private firestore: Firestore) {}

  ngOnInit(): void {
    this.getUserRole(); // Llamamos a la función para obtener el rol al cargar el componente
  }

  // Método para obtener el rol y nombre del usuario desde Firebase Firestore
  async getUserRole() {
    const user = await this.afAuth.currentUser; // Obtén el usuario actualmente autenticado
    if (user) {
      // Si el usuario está autenticado, obtenemos su rol desde Firestore
      const userDoc = await getDoc(doc(this.firestore, 'users', user.uid));
      if (userDoc.exists()) {
        const data = userDoc.data();
        this.userRole = data?.['role'] || 'usuario'; // Usamos la notación de corchetes para acceder al rol
        this.userName = data?.['firstName'] || ''; // Usamos la notación de corchetes para acceder al nombre
        this.isAdmin = this.userRole === 'admin';
        this.isParamedico = this.userRole === 'paramedico';
      } else {
        console.error("No se encontró el documento de usuario en Firestore");
      }
    }
  }
  

  // Método de logout
  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']); // Redirige al login
    });
  }

  // Métodos de redirección
  goToHospitales() {
    this.router.navigate(['/hospitales']);
  }

  goToPerfil() {
    this.router.navigate(['/perfil']);
  }

  goToRequerimentoUsuario() {
    this.router.navigate(['/requerimento-usuario']);
  }

  goToRequerimentoParamedico() {
    this.router.navigate(['/requerimento-paramedico']);
  }

  goToRegistroParamedico() {
    this.router.navigate(['/registro-paramedico'], {
      queryParams: { role: 'paramedico' } // Pasa el rol paramédico por defecto
    });
  }

  goToRegistroHospital() {
    this.router.navigate(['/registro-hospital']);
  }
}
