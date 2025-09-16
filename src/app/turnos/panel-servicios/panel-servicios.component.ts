import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ServiciosModel } from 'src/app/shared/class/ServiciosModel';

@Component({
  selector: 'app-servicios-panel',
  templateUrl: './panel-servicios.component.html'
})
export class PanelServiciosComponent {
  @Input() titulo!: string;
  @Input() servicios: ServiciosModel[] = [];
  @Output() seleccionar = new EventEmitter<any>();
  @Output() servicioSeleccionado = new EventEmitter<ServiciosModel>();

  onSeleccionar(servicio: ServiciosModel) {
    this.servicioSeleccionado.emit(servicio);
  }
}