import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import​{​LibretaContactosPage​} ​from'../pages/libreta-contactos/libreta-contactos'​;
import​{​AcercaDePage​} ​from​​'../pages/acerca-de/acerca-de'​;
import​{​NuevoContactoPage​} ​from​​'../pages/nuevo-contacto/nuevo-contacto'​;

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseDbProvider } from '../providers/firebase-db/firebase-db';

export const fireBaseConfig={
  apiKey: "AIzaSyBlIzRQOhKTJfQevgQsmINBSCwkgm9urR8",
  authDomain: "microp6agenda.firebaseapp.com",
  databaseURL: "https://microp6agenda.firebaseio.com",
  projectId: "microp6agenda",
  storageBucket: "microp6agenda.appspot.com",
  messagingSenderId: "171866417237"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LibretaContactosPage​,
    AcercaDePage​,
    NuevoContactoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(fireBaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LibretaContactosPage​,
    AcercaDePage​,
    NuevoContactoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseDbProvider,
    FirebaseDbProvider
  ]
})
export class AppModule {}
