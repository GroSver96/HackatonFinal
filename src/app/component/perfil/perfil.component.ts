import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],  // Corregido a styleUrls en plural
})
export class PerfilComponent implements OnInit {
  userData: any;

  constructor(
    private router: Router,
    private UsuarioService: UsuarioService,
    private auth: AngularFireAuth
  ) {}

  ngOnInit(): void {
    this.auth.user.subscribe((user) => {
      if (user?.uid) {
        this.UsuarioService.getUserData(user.uid).subscribe((data) => {
          this.userData = data;
        });
      }
    });
  }

  // Método para redirigir al home
  goHome() {
    this.router.navigate(['/home']); // Asegúrate de que '/home' sea la ruta a la página de inicio
  }
}
