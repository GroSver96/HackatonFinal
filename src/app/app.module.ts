import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Importar FormsModule
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../enviroments/enviroments';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { RegistroUsuarioComponent } from './component/registro-usuario/registro-usuario.component';
import { HospitalesComponent } from './component/hospitales/hospitales.component';
import { PerfilComponent } from './component/perfil/perfil.component';
import { RequerimentoUsuarioComponent } from './component/requerimento-usuario/requerimento-usuario.component';
import { RegistroHospitalComponent } from './component/registro-hospital/registro-hospital.component';
import { RegistroParamedicoComponent } from './component/registro-paramedico/registro-paramedico.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ReactiveFormsModule } from '@angular/forms';
import { RequeParamedicoComponent } from './component/reque-paramedico/reque-paramedico.component';
import { SolicitudesParaHospitalesComponent } from './component/solicitudes-para-hospitales/solicitudes-para-hospitales.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistroUsuarioComponent,
    HospitalesComponent,
    PerfilComponent,
    RequerimentoUsuarioComponent,
    RegistroHospitalComponent,
    RequerimentoUsuarioComponent,
    RegistroParamedicoComponent,
    RequeParamedicoComponent,
    SolicitudesParaHospitalesComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  // Asegúrate de que FormsModule esté aquí
    AngularFireModule.initializeApp(environment.firebase), // Inicializa Firebase
    AngularFireAuthModule, // Módulo para autenticación
    AngularFirestoreModule, // Módulo para Firestore
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({
      "projectId": "hackaton-final",
      "appId": "1:1053176790331:web:6841b9e43c8e458eb40b1e",
      "storageBucket": "hackaton-final.firebasestorage.app",
      "apiKey": "AIzaSyCRC50ixfPi-RGZSoptV_BHPQ6vdyvJB1o",
      "authDomain": "hackaton-final.firebaseapp.com",
      "messagingSenderId": "1053176790331"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideAnimationsAsync()
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
