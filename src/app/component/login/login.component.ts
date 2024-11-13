// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';  // Servicio para usuarios y paramédicos
import { AdminService } from '../../services/admin.service';      // Servicio para administradores (hospitales)

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
        if (user.role === 'paramedico') {
          this.router.navigate(['/home']);
        } else {
          this.router.navigate(['/home']);
        }
        return;
      }

      // 2. Intentar autenticación en la base de datos de administradores (hospitales)
      const admin = await this.adminService.login(this.email, this.password);
      if (admin) {
        this.router.navigate(['/home']);
        return;
      }

      // 3. Mostrar mensaje de error si no se encuentra en ninguna base de datos
      this.errorMessage = 'Credenciales incorrectas, intenta nuevamente';

    } catch (error) {
      console.error(error);
      this.errorMessage = 'Hubo un problema con el inicio de sesión. Intenta nuevamente.';
    }
  }
}
