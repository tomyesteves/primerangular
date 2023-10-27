import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from '../../services/contact.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  constructor(private contactService: ContactServiceService) { }

  ngOnInit() {
    this.RefreshContacts();
  }

  RefreshContacts() {
    return this.GetContactsService().GetContacts();
  }

  GetContactsService(): ContactServiceService {
    return this.contactService;
  }
}
