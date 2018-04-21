import { Component } from '@angular/core';
import {IonicPage, LoadingController, ToastController} from 'ionic-angular';
// @Modeñs
import { Claim } from "../../models/claim.model";
import { ClaimsProvider } from "../../providers/claims/claims";


@IonicPage()
@Component({
  selector: 'page-claims-list',
  templateUrl: 'claims-list.html',
})
export class ClaimsListPage {
  claims: Array<Claim>;

  constructor(private loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              private claimsPrv: ClaimsProvider) {
  }

  ionViewDidEnter() {
    const load = this.loadingCtrl.create({
      content: 'Cargando los reclamos de los consorcistas...'
    });
    load.present();
    this.claims = [];
    this.claimsPrv.getCurrentClaims().subscribe(
      res => {
        this.claims.push(...res['items']);
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



}