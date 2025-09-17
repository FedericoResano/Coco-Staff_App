import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ServicioModel } from 'src/app/shared/models/servicioModel';
import { ServiciosService } from 'src/app/shared/services/servicioService';

@Component({
  selector: 'app-servicios-panel',
  templateUrl: './panel-servicios.component.html'
})
export class PanelServiciosComponent implements OnInit {

  serviciosModel: ServicioModel[] = [] ;
  agrupadosPorTipo: { tipo: number; descripcion: string; servicios: ServicioModel[] }[] = [];
  
  @Input() servicios: ServicioModel[] = [];
  @Output() servicioSeleccionado = new EventEmitter<ServicioModel>();

  constructor(private _srvServicios: ServiciosService)
  {}

  async ngOnInit() {
    this.serviciosModel = await firstValueFrom(this._srvServicios.getAll())
    this.agrupadosPorTipo = await this.groupByTipo(this.serviciosModel);
  }

 
  private async  groupByTipo(servicios: ServicioModel[]) {
  const map = new Map<number, { descripcion: string; servicios: ServicioModel[] }>();

  for (const s of servicios) {
    if (!map.has(s.tipoServicio.codigo)) {
      map.set(s.tipoServicio.codigo, {
        descripcion: s.tipoServicio.tipoServicio,
        servicios: []
      });
    }
    map.get(s.tipoServicio.codigo)!.servicios.push(s);
  }

  // lo devuelvo como array porque en Angular es más cómodo hacer *ngFor
  return Array.from(map.entries()).map(([codigo, { descripcion, servicios }]) => ({
    tipo: codigo,
    descripcion,
    servicios
  }));
}

  onSeleccionar(servicio: ServicioModel) {
    this.servicioSeleccionado.emit(servicio);
  }
}