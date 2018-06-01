import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SendClaimPageModule} from "../pages/send-claim/send-claim.module";
import { ClaimsProvider } from '../providers/claims/claims';
import { HttpClientModule } from "@angular/common/http";
import { ClaimsListPageModule } from "../pages/claims-list/claims-list.module";

import * as moment from 'moment';
import { ClaimMessagePageModule } from "../pages/claim-message/claim-message.module";
import { LoginPageModule } from "../pages/login/login.module";
import { UsersProvider } from '../providers/users/users';
import { IonicStorageModule } from "@ionic/storage";

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SendClaimPageModule,
    ClaimsListPageModule,
    HttpClientModule,
    ClaimMessagePageModule,
    LoginPageModule,
    IonicStorageModule.forRoot({
      name: '__cuferdb'
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ClaimsProvider,
    UsersProvider,
  ]
})
export class AppModule {
  constructor() {
    moment.locale('es');
  }
}
