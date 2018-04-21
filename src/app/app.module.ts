import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SendClaimPageModule} from "../pages/send-claim/send-claim.module";
import { ClaimsProvider } from '../providers/claims/claims';
import { HttpClientModule } from "@angular/common/http";
import { ClaimsListPageModule } from "../pages/claims-list/claims-list.module";
import { LoginPageModule } from "../pages/login/login.module";

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SendClaimPageModule,
    ClaimsListPageModule,
    HttpClientModule,
    LoginPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ClaimsProvider
  ]
})
export class AppModule {}
