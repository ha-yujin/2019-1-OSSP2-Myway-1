import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import firebaseConfig from './firebase';
//import { AngularFireModule } from 'angularfire2'; //
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from 'angularfire2/database'; //
<<<<<<< HEAD
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
=======
import {AngularFireStorageModule} from 'angularfire2/storage';
>>>>>>> 61b9cd4a961377be308f0efe15abd6a424a24499
import { AngularFireAuthModule } from '@angular/fire/auth';
import { config } from './firebase.credentials';
import { IonicStorageModule } from '@ionic/storage';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    Camera,
    StatusBar,
    SplashScreen,
    AngularFirestore,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
