import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { HorarioModel, HorarioTurnoModel } from 'src/app/shared/models/horarioModel';
import { HorariosService } from 'src/app/shared/services/horariosService';

@Component({
  selector: 'app-panel-horarios',
  templateUrl: './panel-horarios.component.html',
  styleUrls: ['./panel-horarios.component.css']
})
export class PanelHorariosComponent implements OnInit {
  @ViewChild('daysContainer', { static: false }) daysContainer!: ElementRef;
  @Input() codigoProfesional: number | null = null;
  @Output() horarioSeleccionado = new EventEmitter<HorarioTurnoModel>()

  fechaDeHoy = new Date();
  fechaOcupada:Date[] = [];
  // diaActual = this.fechaDeHoy.getDay();
  mesEnCurso = this.fechaDeHoy.getMonth();
  selectedDate: Date | null = null;
  selectedHorario: HorarioModel | null = null;
  horariosDisponibles: HorarioModel[]= [];
  scrollDisabled =false;
  constructor(private horariosService: HorariosService) { }
  diasDeLaSemana: Date[] = [];
  nombresDeDias= ['Dom','Lun','Mar','Mié','Jue','Vie','Sáb'];
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
    }
  }

  fechaInvalida(fecha: Date): boolean {
    if(fecha.getDay() == 0 || fecha.getDay() == 1)
      return true;
    
    return this.fechaOcupada.some(d =>
      d.getFullYear() === fecha.getFullYear() &&
      d.getMonth() === fecha.getMonth() &&
      d.getDate() === fecha.getDate()
    );
  }

 selectDate(dia: Date) {
    this.selectedDate = dia;
  }

  selectHorario(horario: HorarioModel) {
    this.selectedHorario = horario;
  }

  cargarHorarios(date?:Date): void {
    this.horariosService.getAll(this.fechaDeHoy.toISOString().split('T')[0], this.codigoProfesional).subscribe((data) => {
      this.horariosDisponibles = data;
      if(this.horariosDisponibles.length> 0)
        this.selectDate(this.fechaDeHoy);
    });
  }
   scrollLeft() {
    this.daysContainer.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
    this.fechaDeHoy.setDate(this.fechaDeHoy.getDate() - 2)
    if(this.soloFecha(this.fechaDeHoy) < this.soloFecha(new Date()))
     { 
      this.fechaDeHoy = new Date();
      return this.scrollDisabled =true;
     }

    this.generateCalendar();
    return this.scrollDisabled = false;
  }

  scrollRight() {
    this.daysContainer.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
     this.fechaDeHoy.setDate(this.fechaDeHoy.getDate() + 2)
      this.generateCalendar();
  }

  soloFecha(fecha: Date): Date {
  return new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
}

  horarioElegido(){
    if(this.selectDate != null && this.selectHorario)
      {
          var horarioElegido = {fecha: this.selectedDate, horarioModel: this.selectedHorario};
          this.horarioSeleccionado.emit(horarioElegido);
      }
    }
}