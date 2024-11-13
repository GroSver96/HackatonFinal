import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-requerimento-usuario',
  templateUrl: './requerimento-usuario.component.html',
  styleUrl: './requerimento-usuario.component.css'
})
export class RequerimentoUsuarioComponent {
  constructor(private router: Router) {}

// Método para redirigir al home
goHome() {
  this.router.navigate(['/home']); // Asegúrate de que '/home' sea la ruta a la página de inicio
}
}
