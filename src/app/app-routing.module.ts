import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/component/login/login.component';
import { RegistroUsuarioComponent } from '../app/component/registro-usuario/registro-usuario.component';
import { HomeComponent } from '../app/component/home/home.component';

const routes: Routes = [
  { path: '', component: LoginComponent },  // Página inicial
  { path: 'login', component: LoginComponent },
  { path: 'registro-usuario', component: RegistroUsuarioComponent},
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
