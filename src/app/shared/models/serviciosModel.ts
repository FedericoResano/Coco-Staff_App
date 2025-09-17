import { TiposServiciosModel } from "./tiposServiciosModel";

export interface ServiciosModel {
    codigoServicio: number;
    servicio: string;
    duracionServicio: string;
    tipoServicio: TiposServiciosModel;
    
}