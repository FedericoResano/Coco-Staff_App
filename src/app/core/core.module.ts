import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { CoreRoutingModule } from './core.routing.module';
import { TurnosModule } from '../turnos/turnos.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { ContactoModule } from '../contacto/contacto.module';
import { InfoServiciosModule } from '../info-servicios/info-servicios.module';



@NgModule({
  declarations: [
    SidebarComponent,
    ToolbarComponent,
    InicioComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    TurnosModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    ContactoModule,
    InfoServiciosModule,


  ],
  exports:[
    SidebarComponent,
    ToolbarComponent,
    InicioComponent,
    CoreRoutingModule,
  ]
})
export class CoreModule { }
