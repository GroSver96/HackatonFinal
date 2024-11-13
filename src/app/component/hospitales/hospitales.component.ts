import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styleUrl: './hospitales.component.css'
})
export class HospitalesComponent {
  constructor(private router: Router) {}

// Método para redirigir al home
goHome() {
  this.router.navigate(['/home']); // Asegúrate de que '/home' sea la ruta a la página de inicio
}
}
