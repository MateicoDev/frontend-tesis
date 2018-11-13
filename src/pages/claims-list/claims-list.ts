import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, ToastController} from 'ionic-angular';
// @Providers
import { ClaimsProvider } from "../../providers/claims/claims";
// @Plugins
import * as moment from 'moment';
// @Page
import {ClaimMessagePage} from "../claim-message/claim-message";
import { UsersProvider } from "../../providers/users/users";
import { SendClaimPage } from "../send-claim/send-claim";

@IonicPage()
@Component({
  selector: 'page-claims-list',
  templateUrl: 'claims-list.html',
})
export class ClaimsListPage {
  SEGMENT_SENT_KEY = 'sent';
  SEGMENT_RECIEVED_KEY = 'recieved';

  claims: Array<any>;
  sent = [];

  gotSent = false;

  currentUser;
  claimsListed: string = this.SEGMENT_SENT_KEY;

  constructor(private loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              private claimsPrv: ClaimsProvider,
              private navCtrl: NavController,
              private usersPrv: UsersProvider) {
  }

  ionViewDidEnter() {
    const load = this.loadingCtrl.create({
      content: 'Cargando sus reclamos...'
    });
    load.present();
    this.currentUser = this.usersPrv.currentUser;
    this.claims = [];
    this.sent = [];
    this.claimsPrv.getCurrentClaims({type: 'sent', id: this.currentUser.id}).subscribe(
      res => {
        this.sent.push(...res['claims']['items']);
        this.claims = [...this.sent];
        this.gotSent = true;
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

  openNewClaimForm() {
    this.navCtrl.push(SendClaimPage);
  }
}
