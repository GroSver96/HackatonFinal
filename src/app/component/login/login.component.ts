import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private adminService: AdminService
  ) {}

  async onSubmit() {
    try {
      // 1. Intentar autenticación en la base de datos de usuarios/paramédicos
      const user = await this.usuarioService.login(this.email, this.password);
      if (user) {
        // Si el usuario es un paramédico, redirige al home
        if (user.role === 'paramedico') {
          console.log('Bienvenido paramédico');
          this.router.navigate(['/home']);
        } else {
          // Redirige a otro lugar si es un usuario con otro rol
          this.router.navigate(['/home']);
        }
        return;
      }

      // 2. Intentar autenticación en la base de datos de administradores (hospitales)
      const admin = await this.adminService.login(this.email, this.password);
      if (admin && admin.role === 'admin') {
        console.log('Bienvenido administrador');
        this.router.navigate(['/home']);
        return;
      }

      // 3. Si no se encuentra en ninguna base de datos, mostrar mensaje de error
      this.errorMessage = 'Credenciales incorrectas, intenta nuevamente';

    } catch (error) {
      console.error('Error al intentar iniciar sesión', error);
      this.errorMessage = 'Hubo un problema con el inicio de sesión. Intenta nuevamente.';
    }
  }
}
