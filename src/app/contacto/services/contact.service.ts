import { Injectable } from '@angular/core';
import { Contact } from 'src/interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  private baseUrl: string = 'http://jmelnik.ddns.net:3000/contacts';

  constructor() { }

  private contacts: Contact[] = [];

  GetContacts() {
    this.FetchContacts();
    return this.contacts;
  }

  async FetchContacts() {
    const res = await fetch(this.baseUrl);
    const fetchContacts = await res.json();
    this.contacts = fetchContacts;
  }

  AddContact(contacto: Contact) {
    /*contacto.id = this._id++;
    this.GetContacts().push(contacto);*/
  }

  DeleteContact(id: number) {
    /*let contactToDelete = this.FindContactById(id);
    if (contactToDelete) {
      this.GetContacts().splice(this.GetContacts().indexOf(contactToDelete), 1);
    }*/
  }

  FindContactById(id: number) {
    /*return this.GetContacts().find(contact => contact.id == id);*/
  }
}
