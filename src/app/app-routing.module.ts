import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmpEstudiantesNuevosComponent } from './Components/cmp-estudiantes-nuevos/cmp-estudiantes-nuevos.component';
import { CmpEstudiantesComponent } from './Components/cmp-estudiantes/cmp-estudiantes.component';
import { CmpPersonajesComponent } from './Components/cmp-personajes/cmp-personajes.component';
import { CmpProfesoresComponent } from './Components/cmp-profesores/cmp-profesores.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'personajes'},
  { path: 'personajes', component: CmpPersonajesComponent },
  { path: 'estudiantes', component: CmpEstudiantesComponent },
  { path: 'profesores', component: CmpProfesoresComponent },
  { path: 'ingresar_estudiantes', component: CmpEstudiantesNuevosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
