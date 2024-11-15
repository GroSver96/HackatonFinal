import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-paramedico',
  templateUrl: './registro-paramedico.component.html',
  styleUrls: ['./registro-paramedico.component.css']
})
export class RegistroParamedicoComponent {
  user = {
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    email: '',
    password: '',
    bloodType: '',
    role: 'paramedico'
  };

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  // Método para manejar el envío del formulario
  onSubmit() {
    // Registrar al paramédico sin cambiar la sesión actual del administrador
    this.usuarioService.register(this.user.email, this.user.password, this.user)
      .subscribe(
        (response) => {
          console.log('Usuario paramédico registrado exitosamente');
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
        (error) => {
          console.error('Error al registrar al paramédico:', error);
          alert('Error al registrar al paramédico. Por favor, intenta nuevamente.');
        }
      );
  }

  // Método para limpiar los campos del formulario
  clearForm() {
    this.user.firstName = '';
    this.user.lastName = '';
    this.user.address = '';
    this.user.phone = '';
    this.user.email = '';
    this.user.password = '';
    this.user.bloodType = '';
    this.user.role = 'paramedico';
  }

// Método para redirigir al home
goHome() {
  this.router.navigate(['/home']);
}
}
