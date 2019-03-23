import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NuevoContactoPage } from '../nuevo-contacto/nuevo-contacto';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the LibretaContactosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-libreta-contactos',
  templateUrl: 'libreta-contactos.html',
})
export class LibretaContactosPage {

  contacts: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase: FirebaseDbProvider, private alertCtrl: AlertController) {
  }

  ionViewWillEnter() {
    this.dbFirebase.getContactos().subscribe(listaContactos => { this.contacts = listaContactos });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LibretaContactosPage');
  }

  onLoadContactosPage() {
    this.navCtrl.push(NuevoContactoPage);
  }

  deleteContact(key) {
    let alert = this.alertCtrl.create({
      title: 'Borrado',
      message: '¿Quieres borrar el contacto?',
      buttons: [
        {
          text: 'No',
          role: 'No',
          handler: () => {
          }
        },
        {
          text: 'Sí',
          handler: () => {
            this.dbFirebase.delContacto(key);
          }
        }
      ]
    });
    alert.present();
  }


}
