  import { Component } from '@angular/core';
  import { Router } from '@angular/router';
  @Component({
    selector: 'app-requerimento-paramedico',
    templateUrl: './requerimento-paramedico.component.html',
    styleUrl: './requerimento-paramedico.component.css'
  })
  export class RequerimentoParamedicoComponent {
    constructor(private router: Router) {}

  // Método para redirigir al home
  goHome() {
    this.router.navigate(['/home']); // Asegúrate de que '/home' sea la ruta a la página de inicio
  }
  }

