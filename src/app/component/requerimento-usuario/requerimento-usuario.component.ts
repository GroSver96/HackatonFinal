import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requerimento-usuario',
  templateUrl: './requerimento-usuario.component.html',
  styleUrl: './requerimento-usuario.component.css'
})
export class RequerimentoUsuarioComponent implements OnInit {
  isModalOpen = false;

  request = {
    emergencyType: '',
    severity: '',
    location: '',
    description: '',
    userName: ''
  };

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
  ) {}

  // Método para obtener y asignar el nombre del usuario
  async obtenerNombreUsuario() {
    const nombre = await this.usuarioService.getNombreUsuario();
    this.request.userName = nombre || 'Usuario anónimo'; // Asigna un valor predeterminado si el nombre no está disponible
  }

  ngOnInit(): void {
    this.obtenerNombreUsuario();
    this.updateLocation();
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onSubmit() {
    // Aquí llamamos al servicio para guardar la solicitud de ambulancia en Firestore
    this.usuarioService.requestAmbulance(this.request).subscribe({
      next: (response) => {
        console.log('Solicitud enviada con éxito:', response);
        this.closeModal();
      },
      error: (error) => {
        console.error('Error al enviar la solicitud:', error);
      }
    });
    this.router.navigate(['/home']);
  }

  // Función para actualizar la ubicación en tiempo real
  updateLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.watchPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          this.request.location = `Latitud: ${lat}, Longitud: ${lon}`;
          document.getElementById('location-display')!.textContent = `Ubicación: Latitud ${lat}, Longitud ${lon}`;
        },
        (error) => {
          alert('Error al obtener la ubicación: ' + error.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );
    } else {
      alert('La geolocalización no está disponible en este navegador.');
    }
  }

  // Método para redirigir al home
  goHome() {
    this.router.navigate(['/home']);
  }
}
