import { Component, OnInit } from '@angular/core';
import { servicesApi } from 'src/app/services/services';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-cmp-profesores',
  templateUrl: './cmp-profesores.component.html',
  styleUrls: ['./cmp-profesores.component.css']
})
export class CmpProfesoresComponent implements OnInit {
  public _table: any;
  constructor(private services: servicesApi) { }

  ngOnInit(): void {
    this.obtenerProfesores();
  }
  async obtenerProfesores(){
    this.services.obtenerProfesores().subscribe(
      (res) => {        
        this._table = res;
      },error => {
        console.log(error);
        var mensajeError = error.error != null ? (error.error) : (error.message);
        Swal.fire('Error',mensajeError.toString(),'error');
      }
    )
  }
  calcularEdad(fechaNacimiento: string) {
    let hoy = new Date()
    let fecha = new Date(fechaNacimiento)
    let edad = hoy.getFullYear() - fecha.getFullYear()
    let diferenciaMeses = hoy.getMonth() - fecha.getMonth()
    if (
      diferenciaMeses < 0 ||
      (diferenciaMeses === 0 && hoy.getDate() < fecha.getDate())
    ) {
      edad--
    }
    return edad
  }


}
