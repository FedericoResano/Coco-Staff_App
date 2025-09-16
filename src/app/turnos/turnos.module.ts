import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendarTurnoComponent } from './agendar-turnos/agendar-turno.component';
import { TurnosRoutingModule } from './turnos.routing.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { PanelServiciosComponent } from './panel-servicios/panel-servicios.component';
import { PanelHorariosComponent } from './panel-horarios/panel-horarios.component';


@NgModule({
    declarations: [
        AgendarTurnoComponent, 
        PanelServiciosComponent,
        PanelHorariosComponent      
    ],
    imports: [
        CommonModule,
        TurnosRoutingModule,
        MatExpansionModule       
        
    ],
    exports: [
        AgendarTurnoComponent,
        TurnosRoutingModule,
        PanelHorariosComponent
    ]
})
export class TurnosModule { }