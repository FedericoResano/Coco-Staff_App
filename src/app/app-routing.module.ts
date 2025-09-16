import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './core/inicio/inicio.component';

const routes: Routes = [
  
   {
    path:'',
    component: InicioComponent
  },
  // {
  //   path:'turnos',
  //   loadChildren: () => import('./turnos/turnos.module').then(m => m.TurnosModule)
  // },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
