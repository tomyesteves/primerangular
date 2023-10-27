import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../../../../interfaces/contact';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input()
  public contacts!: Contact[];

  ngOnInit(): void {
    if (!this.contacts) throw new Error('Contactos is required');
  }

  @Output()
  public onDeleteContact: EventEmitter<number> = new EventEmitter<number>();

  EliminarContacto(id: number) {
    this.onDeleteContact.emit(id)
  }
}
