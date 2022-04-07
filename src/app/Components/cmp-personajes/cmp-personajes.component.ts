import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { servicesApi } from 'src/app/services/services';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-cmp-personajes',
  templateUrl: './cmp-personajes.component.html',
  styleUrls: [ './cmp-personajes.component.css' ]
})
export class CmpPersonajesComponent implements OnInit {
  public _ddllista: any;
  public _table: any = [];
  public _formulario = new FormGroup({
    ddlControl: new FormControl('')
  })

  constructor(private services: servicesApi) { }

  ngOnInit(): void {
    this._ddllista = [
      { "texto": "slytherin" },
      { "texto": "gryffindor" },
      { "texto": "ravenclaw" },
      { "texto": "hufflepuff" },
    ];
  }
  async onChange() {
    this.services.obtenerPersonaje(this._formulario.value.ddlControl).subscribe(
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
