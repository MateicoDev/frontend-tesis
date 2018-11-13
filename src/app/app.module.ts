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
import { ExpensesPageModule } from "../pages/expenses/expenses.module";
import { ExpensesProvider } from '../providers/expenses/expenses';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SendClaimPageModule,
    ClaimsListPageModule,
    ExpensesPageModule,
    HttpClientModule,
    ClaimMessagePageModule,
    LoginPageModule,
    IonicStorageModule.forRoot({
      name: '__vecindappdb'
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
    ExpensesProvider,
  ]
})
export class AppModule {
  constructor() {
    moment.locale('es');
  }
}
