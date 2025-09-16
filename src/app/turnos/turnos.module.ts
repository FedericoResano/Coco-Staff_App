import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendarTurnoComponent } from './agendar-turnos/agendar-turno.component';
import { TurnosRoutingModule } from './turnos.routing.module';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
    declarations: [
        AgendarTurnoComponent,         
    ],
    imports: [
        CommonModule,
        TurnosRoutingModule,
        MatExpansionModule       
        
    ],
    exports: [
        AgendarTurnoComponent,
        TurnosRoutingModule
    ]
})
export class TurnosModule { }