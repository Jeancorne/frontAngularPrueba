import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-cmp-estudiantes-nuevos',
  templateUrl: './cmp-estudiantes-nuevos.component.html',
  styleUrls: [ './cmp-estudiantes-nuevos.component.css' ]
})
export class CmpEstudiantesNuevosComponent implements OnInit {
  public _formulario = new FormGroup({
    txtNombre: new FormControl('',[ Validators.required,Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/) ]),
    txtEdad: new FormControl('',Validators.required),
    txtPatronus: new FormControl('',[ Validators.required,Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/) ]),
  })
  public _table: any = [];
  constructor() { }

  ngOnInit(): void {
    this.obtenerDatosLocal();
  }

  async registrar() {
    var id = await this.obtenerIdAleatorio(1000,20000);
    var json = {
      "id": id,
      "nombre": this._formulario.value.txtNombre,
      "edad": this._formulario.value.txtEdad,
      "patronus": this._formulario.value.txtPatronus,
    }
    this._table.push(json);
    this._formulario.reset();
    await this.guardarDatosLocal(json);
  }
  async obtenerDatosLocal() {
    var guardado = localStorage.getItem('datos');
    this._table = guardado != null ? (JSON.parse(guardado)) : ([]);
  }
  async guardarDatosLocal(registroNuevo: any) {
    var guardado = localStorage.getItem('datos');
    if (guardado == null) {
      localStorage.setItem('datos',JSON.stringify(this._table));
    } else {
      var datoArray = JSON.parse(guardado)
      datoArray.push(registroNuevo)
      localStorage.setItem('datos',JSON.stringify(datoArray));
    }
  }
  async obtenerIdAleatorio(min: any,max: any) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  async eliminarEstudiante(id: any) {
    Swal.fire({
      title: "¿Eliminar el estudiante?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {        
        var guardado: any = [];
        guardado = localStorage.getItem('datos');
        const datoArray = JSON.parse(guardado);        
        const result = datoArray.filter((item: any) => item.id != id);
        localStorage.setItem('datos',JSON.stringify(result));
        this._table = result;

      }
    })
  }

}
