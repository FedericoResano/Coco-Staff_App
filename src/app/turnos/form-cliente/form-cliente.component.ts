import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteModel } from 'src/app/shared/models/clienteModel';

@Component({
    selector: 'app-form-cliente',
    templateUrl: './form-cliente.component.html',
    styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent {
    clienteForm: FormGroup;

    @Output() DatosDelCliente = new EventEmitter<ClienteModel>();

    modeloAEnviar: ClienteModel | null = null;

    constructor(private fb: FormBuilder) {
        this.clienteForm = this.fb.group({
            nombre: ['', [Validators.required, Validators.maxLength(50)]],
            apellido: ['', [Validators.required, Validators.maxLength(50)]],
            mail: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
            telefono: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/^[0-9+\s()-]{7,20}$/)]]
        });
    }

    onSubmit() {
        if (this.clienteForm.invalid) {
            this.clienteForm.markAllAsTouched();
        }
    

        if (this.clienteForm.valid) {
            this.modeloAEnviar = {
            codigo:null,    
            nombreCliente: this.clienteForm.value.nombre,
            apellidoCliente: this.clienteForm.value.apellido,
            mailCliente: this.clienteForm.value.mail,
            telefonoCliente: this.clienteForm.value.telefono,
            }
            this.DatosDelCliente.emit(this.modeloAEnviar);
        }
    }
}