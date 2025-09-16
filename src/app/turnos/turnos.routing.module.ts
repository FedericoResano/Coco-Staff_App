import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendarTurnoComponent } from './agendar-turnos/agendar-turno.component';

const routes: Routes = [
    {
        path: 'turnos',
        component: AgendarTurnoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TurnosRoutingModule { }