import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/interfaces/contact';

@Component({
  selector: 'app-contacto-view',
  templateUrl: './contacto-view.component.html',
  styleUrls: ['./contacto-view.component.css']
})
export class ContactoViewComponent implements OnInit {

  @Input()
  public contact!: Contact;

  ngOnInit(): void {
    if (!this.contact) throw new Error('Contacto is required');
  }

  getContactDescription(): string {
    return `Nombre: ${this.contact.nombre}
    Sobrenombre: ${this.contact.sobrenombre}
    Teléfono: ${this.contact.telefono}
    Email: ${this.contact.email}`;
  }
}
