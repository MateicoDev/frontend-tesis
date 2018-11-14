import { Component } from '@angular/core';
import { IonicPage, LoadingController, MenuController, NavController, ToastController } from 'ionic-angular';
import { UsersProvider } from "../../providers/users/users";
import { SendClaimPage } from "../send-claim/send-claim";
import { Md5 } from "ts-md5";
import { ClaimsListPage } from "../claims-list/claims-list";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  users = [];
  user = {
    email: '',
    password: '',
  };

  constructor(private menuCtrl    : MenuController,
              private usersPrv    : UsersProvider,
              private loadingCtrl : LoadingController,
              private toastCtrl   : ToastController,
              private navCtrl     : NavController) {
  }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }


  private showMessage(msg: string) {
    const toast = this.toastCtrl.create({
      position: 'bottom',
      duration: 3000,
      message: msg
    });
    toast.present();
  }

  login() {
    const cred = {
      user_email: this.user.email,
      user_password: Md5.hashStr(this.user.password)
    };
    const loader = this.loadingCtrl.create({
      content: 'Recuperando datos...'
    });
    loader.present();
    this.usersPrv.login(cred).subscribe(
      (res: any) => {
        loader.dismiss();
        this.usersPrv.currentUser = res.user;
        this.navCtrl.setRoot(ClaimsListPage);
        this.showMessage(`Bienvenido a tu VecindApp!`);
      }, err => {
        loader.dismiss();
        this.showMessage('Email o contraseña incorrecta, intente nuevamente');
      });
  }
}
