import { NgModule } from "@angular/core";
import { ContactoComponent } from "./principal/contacto.component";
import { ContactoRoutingModule } from "./contacto.routing.module";


@NgModule({
    declarations: [
        ContactoComponent,
    ],
    imports: [
     ContactoRoutingModule
    ],
    exports: [
        ContactoComponent,
    ]
})
export class ContactoModule { }