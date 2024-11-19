import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importar el Router

@Component({
  selector: 'app-solicitudes-para-hospitales',
  templateUrl: './solicitudes-para-hospitales.component.html',
  styleUrl: './solicitudes-para-hospitales.component.css'
})
export class SolicitudesParaHospitalesComponent {
  router: any;

  goHome(): void {
    this.router.navigate(['/inicio']); // Navegar a la ruta 'inicio'
  }
}
