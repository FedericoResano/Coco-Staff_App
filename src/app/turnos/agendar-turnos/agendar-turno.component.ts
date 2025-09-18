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
    step:number = 0;
    mensajeDeErrorPost:string = null;

    constructor(private turnosService: TurnosService) { }

    ngOnInit(): void {
        this.servicioElegido = null;
        this.profesionalElegido= null;
        
    }
    
    agendarTurno() {
        
    }

    servicioSeleccionado(servicio: ServicioModel) {
      this.servicioElegido= servicio;
      
      this.siguientePaso();
    }

    profesionalSeleccionado(profesional:ProfesionalModel){
      this.profesionalElegido = profesional;
      
      this.siguientePaso();
    }

    horarioSeleccionado(horarioSeleccionado:HorarioTurnoModel){
      this.horarioDeTurno = horarioSeleccionado;
      
      this.siguientePaso();
    }

    datosDelCliente(clienteModel: ClienteModel)
    {
      this.clienteTurno = clienteModel;
      this.postTurno();
      this.siguientePaso();
      
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

        this.turnosService.add( this.turnoModel).subscribe({
              next: (resp) => {
                 this.turnoGuardado= true;
              },
              
              error: (err) => {
                console.log(err.errors);
                  this.mensajeDeErrorPost = err.message;
              }
        });
    }

    siguientePaso(){
      this.step++;
    }

    pasoAnterior(){
      if(this.step >0 ) this.step--;
    }

  
}