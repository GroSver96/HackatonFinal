import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HospitalService } from '../../services/hospital.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styleUrls: ['./hospitales.component.css']
})
export class HospitalesComponent implements OnInit {
  hospitals: any[] = []; // Array para almacenar hospitales

  constructor(
    private router: Router,
    private hospitalService: HospitalService // Inyectamos el servicio para obtener hospitales
  ) {}

  // Método para redirigir al home
  goHome() {
    this.router.navigate(['/home']); // Redirige al home cuando se llama
  }

  // Método de inicialización
  ngOnInit(): void {
    // Llamamos al servicio para obtener los hospitales
    this.hospitalService.getHospitals().subscribe(data => {
      this.hospitals = data; // Asignamos la lista de hospitales al array
      console.log(this.hospitals); // Verifica los datos en la consola
    });
  }
}
