import { HorarioModel } from './horarioModel';
import { ProfesionalModel } from './profesionalModel';
import { ClienteModel } from './clienteModel';
import { ServicioModel } from './servicioModel';
import { EstadoTurnoModel } from './estadoTurnoModel';

export interface TurnoModel {
    codigo?: number;
    fechaTurno: string;
    horarioModel: HorarioModel;
    empleadoModel: ProfesionalModel;
    clienteModel: ClienteModel;
    servicioModel: ServicioModel;
    estadoTurnoModel?: EstadoTurnoModel;
}