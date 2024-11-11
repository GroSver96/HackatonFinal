import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../enviroments/enviroments';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    AngularFireModule.initializeApp(environment.firebase), // Inicializa Firebase
    AngularFireAuthModule, // Módulo para autenticación
    AngularFirestoreModule // Módulo para Firestore
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"hackaton-final","appId":"1:1053176790331:web:6841b9e43c8e458eb40b1e","storageBucket":"hackaton-final.firebasestorage.app","apiKey":"AIzaSyCRC50ixfPi-RGZSoptV_BHPQ6vdyvJB1o","authDomain":"hackaton-final.firebaseapp.com","messagingSenderId":"1053176790331"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideRemoteConfig(() => getRemoteConfig())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
