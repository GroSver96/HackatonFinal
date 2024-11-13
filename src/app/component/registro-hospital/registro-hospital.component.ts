import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service'; // Asegúrate de tener el servicio correcto
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
    // Llamamos al servicio para registrar el hospital y crear el usuario
    this.adminService.registerHospital(this.hospital).subscribe({
      next: (response) => {
        console.log('Hospital registrado con éxito:', response);
        this.router.navigate(['/home']); // Redirige al inicio después de registrar
      },
      error: (error) => {
        console.error('Error al registrar el hospital:', error);
      }
    });
  }

  goBack() {
    this.router.navigate(['/home']); // O la ruta que corresponda para retroceder
  }

  goHome() {
    this.router.navigate(['/home']); // Redirige al home
  }
}
