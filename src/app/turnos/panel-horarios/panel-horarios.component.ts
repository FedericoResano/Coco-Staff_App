import { Component, Input, OnInit } from '@angular/core';
import { HorariosModel } from 'src/app/shared/models/horariosModels';
import { HorariosService } from 'src/app/shared/services/horariosService';

@Component({
  selector: 'app-panel-horarios',
  templateUrl: './panel-horarios.component.html',
  styleUrls: ['./panel-horarios.component.css']
})
export class PanelHorariosComponent implements OnInit {

  @Input() codigoProfesional: number | null = null;

  fechaDeHoy = new Date();
  fechaOcupada:Date[] = [];
  // diaActual = this.fechaDeHoy.getDay();
  mesEnCurso = this.fechaDeHoy.getMonth();
  selectedDate: Date | null = null;
  horariosDisponibles: HorariosModel[]= [];

  constructor(private horariosService: HorariosService) { }
  diasDeLaSemana: Date[] = [];

  ngOnInit() {
    this.cargarHorarios();
    this.generateCalendar();
  }

  generateCalendar() {
    this.diasDeLaSemana = [];
    for (let day = 0; day < 7; day++) {
      let fecha = new Date(this.fechaDeHoy);
    fecha.setDate(this.fechaDeHoy.getDate() + day);
      if(!this.fechaOcupada.includes(fecha))
      this.diasDeLaSemana.push(fecha);
    console.log("Fecha: ", fecha);
    }
  }

  fechaInvalida(fecha: Date): boolean {
    return this.fechaOcupada.some(d =>
      d.getFullYear() === fecha.getFullYear() &&
      d.getMonth() === fecha.getMonth() &&
      d.getDate() === fecha.getDate()
    );
  }

  selectDate(date: Date) {
    if (!this.fechaInvalida(date)) {
      this.selectedDate = date;
    }
  }

  cargarHorarios(): void {
    debugger;
    console.log(this.fechaDeHoy);
    this.horariosService.getAll(this.fechaDeHoy.toISOString().split('T')[0], this.codigoProfesional).subscribe((data) => {
      this.horariosDisponibles = data;
    });
    // if(this.horariosDisponibles.length == 0){
    //   this.fechaOcupada.includes(this.fechaDeHoy);
    //   this.fechaDeHoy.setDate(this.fechaDeHoy.getDate() + 1);
    //   this.cargarHorarios();
    // }
  }
}