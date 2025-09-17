import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServicioModel } from '../models/servicioModel';


@Injectable({
    providedIn: 'root'
})
export class ServiciosService {
    private apiUrl = `${(environment.UrlApi)}/Servicios`;

    constructor(private http: HttpClient) {}

    getAll(): Observable<ServicioModel[]> {
        return this.http.get<ServicioModel[]>(this.apiUrl+ "/ObtenerTodos");
    }
}