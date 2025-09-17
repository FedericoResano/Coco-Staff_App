export interface ProfesionalModel {
  codigo: number;
  apellido: string;
  nombre: string;
  dni: string;
  fechaDeAlta: Date;
  activo: boolean;
  codigoTipoEmpleado: number;
  tipoEmpleado: string;
  fechaDeBaja?: Date; 
}