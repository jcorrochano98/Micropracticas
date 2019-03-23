//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Contact } from '../../models/contact.model';
/*
  Generated class for the FirebaseDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseDbProvider {

  constructor(public afDB:AngularFireDatabase) {
    console.log('Hello FirebaseDbProvider Provider');
  }

  guardaContacto(contacto:Contact) {
    if(contacto.key=='') {
      contacto.key=""+Date.now();
    }
    return this.afDB.database.ref('contactos/'+contacto.key).set(contacto);
  }

  delContacto(key) {
    this.afDB.database.ref('contactos/'+key).remove();
  }

  private contactos=this.afDB.list<Contact>('contactos');

  getContactos() {
    return this.contactos.valueChanges();
  }
}