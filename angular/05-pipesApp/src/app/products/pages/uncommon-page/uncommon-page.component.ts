import { I18nPluralPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

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

  //KeyValue pipe
  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada'
  }

  // Async Pipe
  public myObservableTimer: Observable<number>  = interval(2000).pipe(
    tap( value => console.log('tap: ', value) )
  )

  public promiseValue: Promise<string> = new Promise( ( resolve, reject ) => {
    setTimeout( () => {
      resolve( 'Tenemos data en la promesa' );
      console.log('tenemos data en la promesa');
      this.person.name = 'Otro Nombre'
    }, 3500 )
  } )
}
