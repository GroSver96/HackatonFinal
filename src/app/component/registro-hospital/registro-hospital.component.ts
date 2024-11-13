import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro-hospital',
  templateUrl: './registro-hospital.component.html',
  styleUrl: './registro-hospital.component.css'
})
export class RegistroHospitalComponent {
  constructor(private router: Router) {}

// Método para redirigir al home
goHome() {
  this.router.navigate(['/home']); // Asegúrate de que '/home' sea la ruta a la página de inicio
}
}
