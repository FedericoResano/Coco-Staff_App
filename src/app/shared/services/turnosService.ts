import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TurnoModel } from '../models/turnoModel';


@Injectable({
    providedIn: 'root'
})
export class TurnosService {
    private apiUrl = `${(environment.UrlApi)}/Turnos`;

    constructor(private http: HttpClient) {}

    add(turnoAdd: TurnoModel):Observable<HttpResponse<any>> {
        return this.http.post(this.apiUrl+ "/Agendar", turnoAdd, { observe: 'response' });
    }
}