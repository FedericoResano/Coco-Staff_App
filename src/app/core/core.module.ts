import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { CoreRoutingModule } from './core.routing.module';
import { MaterialModule } from '../material/material.module';
import { TurnosModule } from '../turnos/turnos.module';
import { TurnosRoutingModule } from '../turnos/turnos.routing.module';
import { MatExpansionModule } from '@angular/material/expansion';



@NgModule({
  declarations: [
    SidebarComponent,
    LoginComponent,
    ToolbarComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    TurnosModule,
    MaterialModule,
     MatExpansionModule       
    // StoreModule.forFeature(fromFeatureUser.appStoreFeatureKey, fromFeatureUser.userReducer),
    // EffectsModule.forFeature([AppStoreEffects])

  ],
  exports:[
    SidebarComponent,
    LoginComponent,
    ToolbarComponent,
    InicioComponent,
    CoreRoutingModule
  ]
})
export class CoreModule { }
