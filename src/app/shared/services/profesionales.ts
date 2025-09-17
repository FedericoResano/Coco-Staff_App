import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProfesionalModel } from '../models/profesionalesModel';


@Injectable({
    providedIn: 'root'
})
export class ProfesionalesService {
    private apiUrl = `${(environment.UrlApi)}/Empleados`;

    constructor(private http: HttpClient) {}

    getAll(): Observable<ProfesionalModel[]> {
        debugger;
        return this.http.get<ProfesionalModel[]>(this.apiUrl+ "/ObtenerTodos");
    }
}