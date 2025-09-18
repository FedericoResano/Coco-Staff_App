import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ProfesionalModel } from "src/app/shared/models/profesionalModel";
import { ProfesionalesService } from "src/app/shared/services/profesionalesService";

@Component({
    selector: "app-panel-profesionales",
    templateUrl: "./panel-profesionales.component.html",
    styleUrls: ["./panel-profesionales.component.css"],
})
export class PanelProfesionalesComponent implements OnInit {
    profesionales: ProfesionalModel[] = [];
    seleccionado: ProfesionalModel | null = null;
    btnDisabled= true;

    @Output() profesionalSeleccionado = new EventEmitter<ProfesionalModel>();
    @Output() volver = new EventEmitter<void>();
    
    constructor(private profesionalesService: ProfesionalesService) {}

    ngOnInit(): void {
        this.cargarProfesionales();
    }
    cargarProfesionales(): void {
        this.profesionalesService.getAll().subscribe((data) => {
            this.profesionales = data;
        });
    }

    seleccionarEmpleado(profesional: ProfesionalModel): void {
        this.seleccionado = profesional;
        this.btnDisabled = false;
    }

    continuar(){
        if(this.seleccionado != null){
            this.profesionalSeleccionado.emit(this.seleccionado);

        }
    }
}
