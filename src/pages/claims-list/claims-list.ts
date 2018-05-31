import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, ToastController} from 'ionic-angular';
// @Providers
import { ClaimsProvider } from "../../providers/claims/claims";
// @Plugins
import * as moment from 'moment';
// @Page
import {ClaimMessagePage} from "../claim-message/claim-message";
import { UsersProvider } from "../../providers/users/users";


@IonicPage()
@Component({
  selector: 'page-claims-list',
  templateUrl: 'claims-list.html',
})
export class ClaimsListPage {
  claims: Array<any>;
  currentUser;

  constructor(private loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              private claimsPrv: ClaimsProvider,
              private navCtrl: NavController,
              private usersPrv: UsersProvider) {
  }

  ionViewDidEnter() {
    const load = this.loadingCtrl.create({
      content: 'Cargando los reclamos de los consorcistas...'
    });
    load.present();
    this.currentUser = this.usersPrv.currentUser;
    this.claims = [];
    this.claimsPrv.getCurrentClaims().subscribe(
      res => {
        this.claims.push(...res['claims']['items']);
        load.dismiss();
      },
      err => {
        load.dismiss();
        this.showMessage('Error al obtener los reclamos, revise su conexión e intente más tarde.');
      }
    );
  }

  private showMessage(msg: string) {
    const toast = this.toastCtrl.create({
      position: 'bottom',
      duration: 3000,
      message: msg
    });
    toast.present();
  }

  private formatDate(date: string) {
    return moment(date).format('DD [de] MMMM, YYYY [-] HH:mm');
  }

  openClaim(claim: any) {
    this.navCtrl.push(ClaimMessagePage, { claim });
  }

  userSentClaim(c) {
    if(c.user_sender) {
      return c.user_sender.id_user == this.currentUser.id;
    }
    return false;
  }
}
