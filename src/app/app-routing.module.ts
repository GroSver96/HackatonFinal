import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/component/login/login.component';
import { RegistroUsuarioComponent } from '../app/component/registro-usuario/registro-usuario.component';
import { HomeComponent } from '../app/component/home/home.component';
import { PerfilComponent } from '../app/component/perfil/perfil.component';
import { HospitalesComponent } from '../app/component/hospitales/hospitales.component';
import { RequerimentoUsuarioComponent } from '../app/component/requerimento-usuario/requerimento-usuario.component';
import { RequerimentoParamedicoComponent } from '../app/component/requerimento-paramedico/requerimento-paramedico.component';
import { RegistroHospitalComponent } from '../app/component/registro-hospital/registro-hospital.component';

const routes: Routes = [
  { path: '', component: LoginComponent },  // Página inicial
  { path: 'login', component: LoginComponent },
  { path: 'registro-usuario', component: RegistroUsuarioComponent},
  { path: 'home', component: HomeComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'hospitales', component: HospitalesComponent },
  { path: 'requerimento-usuario', component: RequerimentoUsuarioComponent },
  { path: 'requerimento-paramedico', component: RequerimentoParamedicoComponent },
  { path: 'registro-hospital', component: RegistroHospitalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
