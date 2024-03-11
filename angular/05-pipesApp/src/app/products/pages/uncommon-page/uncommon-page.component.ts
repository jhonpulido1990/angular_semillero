import { I18nPluralPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient() {
    this.name = 'Melissa',
    this.gender = 'female'
  }

  // i18Plural
  public clients: string[] = ['Marias', 'Fernando', 'Pedro', 'Hernando', 'Eduardo', 'Melisa', 'Natalia'];
  public clientsMap = {
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # de clientes esperando'
  }

  deleteClient() {
    this.clients.shift();
  }
}
