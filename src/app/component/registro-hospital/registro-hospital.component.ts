import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';  // Asegúrate de crear el servicio adecuado
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-hospital',
  templateUrl: './registro-hospital.component.html',
  styleUrls: ['./registro-hospital.component.css']
})
export class RegistroHospitalComponent implements OnInit {
  hospital = {
    name: '',
    address: '',
    phone: '',
    level: '',
    email: '',
    password: ''
  };

  constructor(
    private adminService: AdminService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.adminService.registerHospital(this.hospital).subscribe({
      next: (response) => {
        console.log('Hospital registrado con éxito:', response);
        this.router.navigate(['/home']); // Redirige al inicio o donde sea necesario
      },
      error: (error) => {
        console.error('Error al registrar el hospital:', error);
      }
    });
  }

  goBack() {
    this.router.navigate(['/home']); // O la ruta que corresponda para retroceder
  }

// Método para redirigir al home
goHome() {
  this.router.navigate(['/home']); // Asegúrate de que '/home' sea la ruta a la página de inicio
}
}
