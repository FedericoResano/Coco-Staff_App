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
    agrupadosPorTipo: { tipo: number; descripcion: string; servicios: ServiciosModel[] }[] = [];
    servicioElegido: ServiciosModel = null;
    constructor(private _srvServicios: ServiciosService) { }

    ngOnInit(): void {
        console.log(this.servicioElegido);
        this._srvServicios.getAll().subscribe(data => {
            this.serviciosModel = data;
            this.agrupadosPorTipo = this.groupByTipo(this.serviciosModel);
        });
        

    }
    // Ejemplo de método para agendar un turno
    agendarTurno() {
        // Lógica para agendar un turno
    }

    seleccionarServicio(servicio: ServiciosModel) {
      this.servicioElegido= servicio;
      console.log(this.servicioElegido);
    }

    private groupByTipo(servicios: ServiciosModel[]) {
  const map = new Map<number, { descripcion: string; servicios: ServiciosModel[] }>();

  for (const s of servicios) {
    if (!map.has(s.tipoServicio.codigoTipoServicio)) {
      map.set(s.tipoServicio.codigoTipoServicio, {
        descripcion: s.tipoServicio.tipoServicio,
        servicios: []
      });
    }
    map.get(s.tipoServicio.codigoTipoServicio)!.servicios.push(s);
  }

  // lo devuelvo como array porque en Angular es más cómodo hacer *ngFor
  return Array.from(map.entries()).map(([codigo, { descripcion, servicios }]) => ({
    tipo: codigo,
    descripcion,
    servicios
  }));
}
}