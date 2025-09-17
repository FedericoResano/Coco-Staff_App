import { Component, OnInit } from '@angular/core';
import { ServicioModel } from 'src/app/shared/models/servicioModel';
import { ProfesionalModel } from 'src/app/shared/models/profesionalModel';
import { HorarioTurnoModel } from 'src/app/shared/models/horarioModel';
import { ClienteModel } from 'src/app/shared/models/clienteModel';
import { TurnoModel } from 'src/app/shared/models/turnoModel';
import { TurnosService } from 'src/app/shared/services/turnosService';

@Component({
    standalone:false,
    selector: 'app-agendar-turno',
    templateUrl: './agendar-turno.component.html',
    styleUrls: ['./agendar-turno.component.css'],
})
export class AgendarTurnoComponent implements OnInit {
    
    servicioElegido: ServicioModel = null;
    profesionalElegido: ProfesionalModel = null;
    horarioDeTurno: HorarioTurnoModel = null;
    clienteTurno: ClienteModel = null;
    turnoModel: TurnoModel= null;
    turnoGuardado =false;

    constructor(private turnosService: TurnosService) { }

    ngOnInit(): void {
        this.servicioElegido = null;
        this.profesionalElegido= null;
        
    }
    
    agendarTurno() {
        
    }

    seleccionarServicio(servicio: ServicioModel) {
      this.servicioElegido= servicio;
    }

    profesionalSeleccionado(profesional:ProfesionalModel){
      this.profesionalElegido = profesional;
    }

    horarioSeleccionado(horarioSeleccionado:HorarioTurnoModel){
      this.horarioDeTurno = horarioSeleccionado;
    }

    datosDelCliente(clienteModel: ClienteModel)
    {
      this.clienteTurno = clienteModel;
      this.postTurno();
      
    }

    postTurno(){
      this.turnoModel = {
        codigo: null,
        fechaTurno: this.horarioDeTurno.fecha.toISOString().split('T')[0],
        horarioModel: this.horarioDeTurno.horarioModel,
        empleadoModel: this.profesionalElegido,
        servicioModel: this.servicioElegido,
        clienteModel: this.clienteTurno,
        estadoTurnoModel: null
      }
debugger;
        this.turnosService.add( this.turnoModel).subscribe({
  next: (resp) => {
    this.turnoGuardado= true;
    console.log('Código de respuesta:', resp.status);
    console.log('Cuerpo de la respuesta:', resp.body);
  },
  error: (err) => {
    console.error('Error HTTP:', err.status);
    console.error('Mensaje del servidor:', err.error);
  }
});;
    }
  
}