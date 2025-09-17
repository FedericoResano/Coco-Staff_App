export interface HorarioModel{
    codigo: number;
    horario:string;
}

export interface HorarioTurnoModel{
    fecha:Date;
    horarioModel:HorarioModel;
}