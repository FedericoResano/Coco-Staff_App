import { Component, OnInit } from '@angular/core';
import { TiposServiciosModel } from 'src/app/shared/class/tiposServiciosModel';
import {MatExpansionModule} from '@angular/material/expansion';
import { ServiciosModel } from 'src/app/shared/class/ServiciosModel';
import { ServiciosService } from 'src/app/shared/services/servicioService';

@Component({
    standalone:false,
    selector: 'app-agendar-turno',
    templateUrl: './agendar-turno.component.html',
    styleUrls: ['./agendar-turno.component.css'],
})
export class AgendarTurnoComponent implements OnInit {
    serviciosModel: ServiciosModel[] = [] ;
    serviciosCorteModel: ServiciosModel[] = [] ;
    serviciosColorModel: ServiciosModel[] = [] ;

    constructor(private _srvServicios: ServiciosService) { }

    ngOnInit(): void {
        debugger;
        this._srvServicios.getAll().subscribe(data => {
            this.serviciosModel = data;
            this.serviciosCorteModel = this.serviciosModel.filter(s => s.tipoServicio.codigoTipoServicio == 1);
            this.serviciosColorModel = this.serviciosModel.filter(s => s.tipoServicio.codigoTipoServicio == 2); 
        });
        
        debugger;

    }
    // Ejemplo de método para agendar un turno
    agendarTurno() {
        // Lógica para agendar un turno
    }

    seleccionarServicio(servicio: ServiciosModel) {
    }
}