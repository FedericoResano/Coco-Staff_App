import { Component, Input } from '@angular/core';
import { TurnoModel } from 'src/app/shared/models/turnoModel';

@Component({
  selector: 'app-form-detalle-turno',
  templateUrl: './form-detalle-turno.component.html',
  styleUrls: ['./form-detalle-turno.component.css']
})
export class FormDetalleTurnoComponent {
  @Input() turnoReservado: TurnoModel
}
