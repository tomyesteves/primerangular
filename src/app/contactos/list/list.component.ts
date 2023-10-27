import { Component } from '@angular/core';
import { Contacto } from 'src/interfaces/contacto';

@Component({
    selector: 'app-contacto-list',
    templateUrl: './list.component.html'
})
export class ListaComponent {
    titulo: string = "Lista de contactos"
    contactos: Contacto[] = [
        {
            name: "Juan",
            sobrenombre: "Juanito",
            age: 9
        },
        {
            name: "Jose",
            sobrenombre: "Josecito",
            age: 39
        },
        {
            name: "pedro",
            sobrenombre: "Pedrito",
            age: 49
        }
    ]

    getContactDescription(contacto: Contacto): string {
        return `El ${contacto.sobrenombre} ${contacto.name}`
    }
}