import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class servicesApi {
    url: string;
    constructor(private http: HttpClient) { 
        this.url = environment.url;
    }
    obtenerPersonaje(casa: string){
        return this.http.get(this.url + "api/characters/house/" + casa); 
    }
    obtenerEstudiantes(){
        return this.http.get(this.url + "api/characters/students"); 
    }
    obtenerProfesores(){
        return this.http.get(this.url + "api/characters/staff"); 
    }
}  