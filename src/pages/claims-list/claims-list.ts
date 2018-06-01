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
  SEGMENT_SENT_KEY = 'sent';
  SEGMENT_RECIEVED_KEY = 'recieved';

  claims: Array<any>;
  recieved = [];
  sent = [];

  gotSent = false;
  gotRecieved = false;

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
      content: 'Cargando los reclamos de los consorcistas...'
    });
    load.present();
    this.currentUser = this.usersPrv.currentUser;
    this.claims = [];
    this.sent = [];
    this.recieved = [];
    this.claimsPrv.getCurrentClaims({type: 'sent', id: this.currentUser.id}).subscribe(
      res => {
        this.sent.push(...res['claims']['items']);
        this.claims = [...this.sent];
        this.gotSent = true;
        !this.gotRecieved && load.dismiss();
      },
      err => {
        if(!this.gotRecieved) {
          load.dismiss();
          this.showMessage('Error al obtener los reclamos, revise su conexión e intente más tarde.');
        }
      }
    );
    this.claimsPrv.getCurrentClaims({type: 'recieved', id: this.currentUser.id}).subscribe(
      res => {
        this.recieved.push(...res['claims']['items']);
        !this.gotSent && load.dismiss();
      },
      err => {
        if(!this.gotSent) {
          load.dismiss();
          this.showMessage('Error al obtener los reclamos, revise su conexión e intente más tarde.');
        }
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


  segmentChanged(value) {
    if(this.claimsListed == this.SEGMENT_SENT_KEY) {
      this.claims = [...this.sent];
    } else if(this.claimsListed == this.SEGMENT_RECIEVED_KEY) {
      this.claims = [...this.recieved];
    }
  }
}
