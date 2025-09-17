import { TipoServicioModel } from "./tipoServicioModel";

export interface ServicioModel {
    codigo: number;
    servicio: string;
    duracionServicio: string;
    tipoServicio: TipoServicioModel;
    
}