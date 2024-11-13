import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent {
  user = {
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    password: '',
    bloodType: '',
    phone: '',
    role: 'usuario'
  };

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private location: Location
  ) {}

  // Método para manejar el envío del formulario
  onSubmit() {
    this.usuarioService.register(this.user.email, this.user.password, this.user)
      .subscribe(
        (response) => {
          if (response.success) {
            console.log('Usuario registrado exitosamente');
            this.router.navigate(['/home']); // Redirige al componente de bienvenida
            
            // Limpiar el formulario
            this.clearForm();
          } else {
            console.error('Error inesperado');
            alert('Error inesperado. Por favor, intenta nuevamente.');
          }
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
    this.user.role = 'usuario';
  }

  // Método para redirigir atras
  goBack() {
    this.location.back();
  }
}
