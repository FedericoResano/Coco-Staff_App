import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServiciosModel } from '../class/ServiciosModel';


@Injectable({
    providedIn: 'root'
})
export class ServiciosService {
    private apiUrl = `${(environment.UrlApi)}/Servicios`;

    constructor(private http: HttpClient) {}

    getAll(): Observable<ServiciosModel[]> {
        debugger;
        return this.http.get<ServiciosModel[]>(this.apiUrl+ "/ObtenerTodos");
    }
}