import { CommonModule } from '@angular/common';
import { ContactoViewComponent } from './components/contacto-view/contacto-view.component';
import { ListComponent } from './components/list/list.component';
import { NgModule } from '@angular/core';
import { PageComponent } from './components/page/page.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactoViewComponent,
    ListComponent,
    PageComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PageComponent
  ]
})
export class ContactoModule { }
