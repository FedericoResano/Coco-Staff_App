import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendarTurnoComponent } from './agendar-turnos/agendar-turno.component';
import { TurnosRoutingModule } from './turnos.routing.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { PanelServiciosComponent } from './panel-servicios/panel-servicios.component';
import { PanelHorariosComponent } from './panel-horarios/panel-horarios.component';
import { PanelProfesionalesComponent } from './panel-profesionales/panel-profesionales.component';
import { FormClienteComponent } from './form-cliente/form-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormDetalleTurnoComponent } from './form-detalle-turno/form-detalle-turno.component';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';


@NgModule({
    declarations: [
        AgendarTurnoComponent, 
        PanelServiciosComponent,
        PanelHorariosComponent,
        PanelProfesionalesComponent,
        FormClienteComponent,
        FormDetalleTurnoComponent  
    ],
    imports: [
        CommonModule,
        TurnosRoutingModule,
        MatExpansionModule,
      ReactiveFormsModule, 
      FormsModule,
       RecaptchaModule,
      RecaptchaFormsModule,
        
    ],
    exports: [
        AgendarTurnoComponent,
        TurnosRoutingModule,
        PanelHorariosComponent,
        PanelProfesionalesComponent,
        FormClienteComponent,
        FormDetalleTurnoComponent
    ]
})
export class TurnosModule { }