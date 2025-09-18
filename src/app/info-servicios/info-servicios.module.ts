import { NgModule } from "@angular/core";
import { InfoServiciosComponent } from "./component/info-servicios.component";
import { InfoServiciosRoutingModule } from "./info-servicios.routing.module";


@NgModule({
    declarations: [
        InfoServiciosComponent,
    ],
    imports: [
     InfoServiciosRoutingModule,
    ],
    exports: [
        InfoServiciosComponent,
    ]
})
export class InfoServiciosModule { }