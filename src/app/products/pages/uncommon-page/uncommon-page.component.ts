import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n Select

  public name: string = 'Mauricio';
  public gender: 'male' | 'female' = 'male';
  public invitationMap =
  {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(){
    this.name = 'Ana Paula';
    this.gender = 'female';
  }

  //i18n Plural

  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Santiago', 'Jose', 'Sebastian', 'Soledad'];
  public clientsMap = {
    '=O' : 'No tenemos ningun cliente esperando.',
    '=1' : 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  deletClient(){
    this.clients.shift();
  }

  //keyvalue

  public person={
    name: 'Mauricio',
    age: 31,
    address: 'Ottawa, Canada'
  }

  //Async

  public myObservableTimer:Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() =>{
      resolve('Tenemos data en la promesa.');
      console.log('tenemos data en la promesa');
      this.person.name = 'otro nombre';
    }, 3500)
  })

}
