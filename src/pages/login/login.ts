import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, ToastController } from 'ionic-angular';
import { Page } from "ionic-angular/navigation/nav-util";
// @Pages
import { ClaimsListPage } from "../claims-list/claims-list";
import { SendClaimPage } from "../send-claim/send-claim";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private navCtrl: NavController,
              private loadCtrl: LoadingController,
              private toastCtrl: ToastController) {
  }

  loginAsAdmin() {
    this.goToPage(ClaimsListPage);
  }

  loginAsUser() {
    this.goToPage(SendClaimPage);
  }

  private goToPage(page: Page) {
    const load = this.loadCtrl.create({ content: 'Iniciando sesión'});
    load.present();
    setTimeout(() => {
      load.dismiss();
      this.showMessage('¡Bienvenido al sistema!');
      this.navCtrl.push(page);
    }, 2000);
  }


  private showMessage(msg: string) {
    const toast = this.toastCtrl.create({
      position: 'bottom',
      duration: 3000,
      message: msg
    });
    toast.present();
  }

}
