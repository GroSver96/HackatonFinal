import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service'; // Asegúrate de tener el servicio correcto
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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
      password: '',
      role: 'admin'
  };

  constructor(
    private adminService: AdminService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    // Llamamos al servicio para registrar el hospital y crear el usuario
    this.adminService.registerHospital(this.hospital).subscribe({
      next: (response) => {
        // Mostrar notificación
        const snackBarRef = this.snackBar.open('Hospital registrado con éxito', 'Aceptar', {
          duration: 5000, // Duración de la notificación (ms)
          verticalPosition: 'top', // Posición vertical
          horizontalPosition: 'center', // Posición horizontal
        });
        snackBarRef.onAction().subscribe(() => {
        snackBarRef.dismiss(); // Cierra la notificación
        });
        this.clearForm();
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

  // Método para limpiar los campos del formulario
  clearForm() {
    this.hospital.name = '';
    this.hospital.address = '';
    this.hospital.phone = '';
    this.hospital.level = '';
    this.hospital.email = '';
    this.hospital.password = '';
    this.hospital.role = 'amin';
  }
}
