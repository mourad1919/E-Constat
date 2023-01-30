import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QRCodeModule } from 'angularx-qrcode';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { AuthInterceptor } from './services/auth.interceptor';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(),
     AppRoutingModule,HttpClientModule,QRCodeModule],
  providers: [ AuthInterceptor, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },PDFGenerator],
  bootstrap: [AppComponent],
})
export class AppModule {}
