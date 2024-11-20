import { Component, OnInit } from '@angular/core';
import { SolicitudesHospitalesService } from '../../services/solicitudes-hospitales.service'; // Correcto importar el servicio
import { Router } from '@angular/router'; // Importar el Router

@Component({
  selector: 'app-solicitudes-para-hospitales',  // Se ha cambiado el selector aquí
  templateUrl: './solicitudes-para-hospitales.component.html',  // Se ha cambiado el templateUrl aquí
  styleUrls: ['./solicitudes-para-hospitales.component.css']  // Se ha cambiado el styleUrls aquí
})
export class SolicitudesParaHospitalesComponent implements OnInit {  // Nombre de la clase mantiene el mismo nombre

  solicitudes: any[] = []; // Aquí se almacenarán las solicitudes de ambulancia

  constructor(
    private solicitudesHospitalesService: SolicitudesHospitalesService,
    private router: Router // Inyectar Router
  ) { }

  ngOnInit(): void {
    // Obtener las solicitudes de ambulancia al iniciar
    this.solicitudesHospitalesService.getSolicitudesHospitales().subscribe(data => {
      this.solicitudes = data;  // Asignar las solicitudes al array
      console.log(this.solicitudes); // Ver en la consola las solicitudes
    });
  }

  // Método para redirigir al home
  goHome() {
    this.router.navigate(['/home']); // Redirige al home cuando se llama
  }
}
