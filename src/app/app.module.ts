
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { servicesApi } from './services/services';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CmpPersonajesComponent } from './Components/cmp-personajes/cmp-personajes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CmpEstudiantesComponent } from './Components/cmp-estudiantes/cmp-estudiantes.component';
import { CmpProfesoresComponent } from './Components/cmp-profesores/cmp-profesores.component';
import { CmpEstudiantesNuevosComponent } from './Components/cmp-estudiantes-nuevos/cmp-estudiantes-nuevos.component';
Component
@NgModule({
  declarations: [
    AppComponent,    
    CmpPersonajesComponent,
    CmpEstudiantesComponent,
    CmpProfesoresComponent,
    CmpEstudiantesNuevosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [servicesApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
