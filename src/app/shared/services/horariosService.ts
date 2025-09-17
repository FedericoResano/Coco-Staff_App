import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HorariosModel } from '../models/horariosModels';



@Injectable({
    providedIn: 'root'
})
export class HorariosService {
    private apiUrl = `${(environment.UrlApi)}/Horarios`;

    constructor(private http: HttpClient) {}

    getAll(fecha:string, codigoEmpleado:number): Observable<HorariosModel[]> {
        debugger;
        return this.http.get<HorariosModel[]>(this.apiUrl+ "/ObtenerHorariosDisponibles/"+fecha+"/"+codigoEmpleado);
    }
}