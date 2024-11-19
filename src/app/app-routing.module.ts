import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/component/login/login.component';
import { RegistroUsuarioComponent } from '../app/component/registro-usuario/registro-usuario.component';
import { HomeComponent } from '../app/component/home/home.component';
import { PerfilComponent } from '../app/component/perfil/perfil.component';
import { HospitalesComponent } from '../app/component/hospitales/hospitales.component';
import { RequerimentoUsuarioComponent } from '../app/component/requerimento-usuario/requerimento-usuario.component';
import { RegistroHospitalComponent } from '../app/component/registro-hospital/registro-hospital.component';
import { RegistroParamedicoComponent } from '../app/component/registro-paramedico/registro-paramedico.component';
import { RequeParamedicoComponent } from './component/reque-paramedico/reque-paramedico.component';
import { SolicitudesParaHospitalesComponent } from './component/solicitudes-para-hospitales/solicitudes-para-hospitales.component';

const routes: Routes = [
  { path: '', component: LoginComponent },  // Página inicial
  { path: 'login', component: LoginComponent },
  { path: 'registro-usuario', component: RegistroUsuarioComponent},
  { path: 'home', component: HomeComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'hospitales', component: HospitalesComponent },
  { path: 'requerimento-usuario', component: RequerimentoUsuarioComponent },
  { path: 'reque-paramedico', component: RequeParamedicoComponent },
  { path: 'registro-hospital', component: RegistroHospitalComponent },
  { path: 'registro-paramedico', component: RegistroParamedicoComponent},
  { path: 'solicitudes-hospitales', component: SolicitudesParaHospitalesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
