import { Component } from '@angular/core';
import { IonicPage, LoadingController, ToastController } from 'ionic-angular';
// @Pages
// @Providers
import { ClaimsProvider } from "../../providers/claims/claims";
// @Models
import {Claim} from "../../models/claim.model";

@IonicPage()
@Component({
  selector: 'page-send-claim',
  templateUrl: 'send-claim.html',
})
export class SendClaimPage {
  claim: Claim;

  constructor(private claimsPrv : ClaimsProvider,
              private loaderCtrl: LoadingController,
              private toastCtrl : ToastController) {
  }

  ngOnInit() {
    this.claim = new Claim();
  }

  sendClaim() {
    const load = this.loaderCtrl.create({
      content: 'Enviando su reclamo...'
    });
    load.present();
    this.claimsPrv.sendClaim(this.claim).subscribe(
      res => {
        load.dismiss();
        this.showMessage('Su reclamo ha sido enviado a la administración.');
      },
      err => {
        load.dismiss();
        this.showMessage('Error al enviar su reclamo. Compruebe su conexión e intente más tarde.')
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
