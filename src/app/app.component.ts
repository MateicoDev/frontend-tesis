import { Component, ViewChild } from '@angular/core';
import { MenuController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// @Pages
import { SendClaimPage } from "../pages/send-claim/send-claim";
import { ClaimsListPage } from "../pages/claims-list/claims-list";
import { LoginPage } from "../pages/login/login";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  @ViewChild('sideMenu') sideMenu: MenuController;

  rootPage:any = LoginPage;

  pages = [
    {
      component: SendClaimPage,
      name: 'Enviar Solicitud',
    },
    {
      component: ClaimsListPage,
      name: 'Listar Solicitudes',
    },
    {
      component: LoginPage,
      name: 'Cerrar Sesión',
    }
  ];

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    this.sideMenu.close();
    this.nav.setRoot(page.component);
  }
}
