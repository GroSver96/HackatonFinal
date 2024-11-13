import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']  // Corregido a styleUrls en plural
})
export class PerfilComponent {
  constructor(private router: Router) {}

  // Método para redirigir al home
  goHome() {
    this.router.navigate(['/home']); // Asegúrate de que '/home' sea la ruta a la página de inicio
  }
}
