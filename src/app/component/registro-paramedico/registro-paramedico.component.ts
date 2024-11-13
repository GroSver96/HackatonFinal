import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

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
    email: '',
    password: '',
    bloodType: '',
    phone: '',
    role: 'paramedico'  // Establecer el rol como 'paramedico' por defecto
  };

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
  ) {}

  // Método para manejar el envío del formulario
  onSubmit() {
    this.usuarioService.register(this.user.email, this.user.password, this.user)
      .subscribe(
        (response) => {
          console.log('Usuario registrado exitosamente');
          this.router.navigate(['/home']); // Redirige al componente de inicio o bienvenida

          // Limpiar el formulario
          this.clearForm();
        },
        (error) => {
          console.error('Error al registrar al usuario:', error);
          alert('Error al registrar al usuario. Por favor, intenta nuevamente.');
        }
      );
  }

  // Método para limpiar los campos del formulario
  clearForm() {
    this.user.firstName = '';
    this.user.lastName = '';
    this.user.address = '';
    this.user.email = '';
    this.user.password = '';
    this.user.bloodType = '';
    this.user.phone = '';
    this.user.role = 'paramedico'; // Asegurarse de que el rol sea 'paramedico'
  }

// Método para redirigir al home
goHome() {
  this.router.navigate(['/home']); // Asegúrate de que '/home' sea la ruta a la página de inicio
}
}
