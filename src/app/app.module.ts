import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  registrationStrategy: "registerImmediately"
  // Register the ServiceWorker as soon as the app is stable
  // or after 30 seconds (whichever comes first).
  //registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BarcodeScanner
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}
