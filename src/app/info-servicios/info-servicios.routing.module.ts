import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoServiciosComponent } from './component/info-servicios.component';


const routes: Routes =[
  {
      path:'info-servicios',
      component: InfoServiciosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class InfoServiciosRoutingModule { }