import { Component, EventEmitter, Output } from '@angular/core';
import { Contact } from 'src/interfaces/contact';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  public contact: Contact = {
    id: 0,
    nombre: '',
    sobrenombre: '',
    edad: 0,
    telefono: '',
    foto: '',
    email: ''
  };

  @Output()
  public onNewContacto: EventEmitter<Contact> = new EventEmitter<Contact>();

  EmitirContacto() {
    this.onNewContacto.emit(this.contact);
    this.Limpiar();
  }

  Limpiar() {
    this.contact = {
      id: 0,
      nombre: '',
      sobrenombre: '',
      edad: 0,
      telefono: '',
      foto: '',
      email: ''
    };
  }
}
