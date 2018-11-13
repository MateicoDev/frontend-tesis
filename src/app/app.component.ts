import { Component, ViewChild } from '@angular/core';
import { MenuController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// @Pages
import { ClaimsListPage } from "../pages/claims-list/claims-list";
import { LoginPage } from "../pages/login/login";
import { ExpensesPage } from "../pages/expenses/expenses";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  @ViewChild('sideMenu') sideMenu: MenuController;

  rootPage:any = LoginPage;

  pages = [
    {
      component: ClaimsListPage,
      name: 'Mis Reclamos',
    },
    {
      component: ExpensesPage,
      name: 'Mis Expensas',
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
