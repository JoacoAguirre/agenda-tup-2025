import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactListItem } from '../../components/contact-list-item/contact-list-item';
import { Contact } from '../../interfaces/contacto';
import { Auth } from '../../services/auth';
import { ContactsService } from '../../services/contacts-service';

@Component({
  selector: 'app-contact-list-page',
  imports: [RouterModule,ContactListItem],
  templateUrl: './contact-list-page.html',
  styleUrl: './contact-list-page.scss'
})
export class ContactListPage {

  authService = inject(Auth)
  contactsService = inject(ContactsService)
}
