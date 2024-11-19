import { Component } from '@angular/core';
import { AmbulanceRequestService } from '../../services/ambulance-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reque-paramedico',
  templateUrl: './reque-paramedico.component.html',
  styleUrls: ['./reque-paramedico.component.css']
})
export class RequeParamedicoComponent {
  ambulanceRequests: any[] = []; // Lista de solicitudes
  newRequest = {  // Nueva solicitud que se agrega
    nombre: '',
    location: '',
    emergencyType: '',
    severity: '',
    userName: '',
    paramedicName: '',
    paramedicLocation: ''
  };
  editRequestData: any = {}; // Datos de la solicitud a editar
  isEditing = false; // Controla si estamos en modo de edición
  editRequestId: string | null = null; // ID de la solicitud que se está editando

  constructor(
    private ambulanceRequestService: AmbulanceRequestService,
    private router: Router
  ) {}

  // Cargar las solicitudes de la base de datos
  ngOnInit(): void {
    this.loadRequests();
  }

  loadRequests(): void {
    this.ambulanceRequestService.getAllRequests().subscribe(data => {
      this.ambulanceRequests = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      });
    });
  }

  // Agregar una nueva solicitud
  addRequest(): void {
    const newRequest = { ...this.newRequest }; // Copiar los datos de la nueva solicitud
    this.ambulanceRequestService.addRequest(newRequest).then(() => {
      console.log('Registro agregado');
      this.loadRequests(); // Recargar la lista después de agregar la solicitud
      this.newRequest = { // Limpiar el formulario
        nombre: '',
        location: '',
        emergencyType: '',
        severity: '',
        userName: '',
        paramedicName: '',
        paramedicLocation: ''
      };
    }).catch(err => console.error(err));
  }

  // Editar una solicitud
  editRequest(id: string): void {
    const request = this.ambulanceRequests.find(r => r.id === id);
    if (request) {
      this.editRequestData = { ...request }; // Cargar los datos de la solicitud a editar
      this.isEditing = true;
      this.editRequestId = id;
    }
  }

  // Guardar los cambios realizados en una solicitud
  saveEditRequest(): void {
    const updatedRequest = { ...this.editRequestData };
    if (this.editRequestId) {
      this.ambulanceRequestService.updateRequest(this.editRequestId, updatedRequest).then(() => {
        console.log('Registro actualizado');
        this.loadRequests(); // Recargar la lista después de actualizar la solicitud
        this.cancelEdit();
      }).catch(err => console.error(err));
    }
  }

  // Cancelar la edición y restablecer el formulario
  cancelEdit(): void {
    this.isEditing = false;
    this.editRequestId = null;
    this.editRequestData = {}; // Limpiar los datos de edición
  }

  // Eliminar una solicitud
  deleteRequest(id: string): void {
    this.ambulanceRequestService.deleteRequest(id).then(() => {
      console.log('Registro eliminado');
      this.loadRequests(); // Recargar la lista después de eliminar la solicitud
    }).catch(err => console.error(err));
  }

  // Redirigir al home
  goHome(): void {
    this.router.navigate(['/home']);
  }
}
