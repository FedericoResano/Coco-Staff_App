import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendarTurnoComponent } from './agendar-turnos/agendar-turno.component';
import { TurnosRoutingModule } from './turnos.routing.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { PanelServiciosComponent } from './panel-servicios/panel-servicios.component';
import { PanelHorariosComponent } from './panel-horarios/panel-horarios.component';
import { PanelProfesionalesComponent } from './panel-profesionales/panel-profesionales.component';


@NgModule({
    declarations: [
        AgendarTurnoComponent, 
        PanelServiciosComponent,
        PanelHorariosComponent   ,
        PanelProfesionalesComponent   
    ],
    imports: [
        CommonModule,
        TurnosRoutingModule,
        MatExpansionModule       
        
    ],
    exports: [
        AgendarTurnoComponent,
        TurnosRoutingModule,
        PanelHorariosComponent,
        PanelProfesionalesComponent
    ]
})
export class TurnosModule { }