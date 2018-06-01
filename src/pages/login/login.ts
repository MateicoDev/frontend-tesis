import { Component } from '@angular/core';
import { IonicPage, LoadingController, MenuController, NavController, ToastController } from 'ionic-angular';
import { UsersProvider } from "../../providers/users/users";
import { SendClaimPage } from "../send-claim/send-claim";

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
    const loader = this.loadingCtrl.create({
      content: 'Recuperando datos...'
    });
    loader.present();
    this.usersPrv.getUsers().subscribe((res: any) => {
      this.users = res.users.items;
      loader.dismiss();
    }, err => {
      loader.dismiss();
      this.showMessage('Imposible recuperar los datos de inicio de sesión, compruebe su conexión y pruebe nuevamente');
    });
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
    const userIdx = this.users.findIndex(u => u.email == this.user.email);
    if (userIdx > -1) {
      const loader = this.loadingCtrl.create({
        content: 'Recuperando datos...'
      });
      loader.present();
      setTimeout(() => {
        loader.dismiss();
        this.usersPrv.currentUser = this.users[userIdx];
        this.users.splice(userIdx, 1);
        this.usersPrv.users = [...this.users];
        this.navCtrl.setRoot(SendClaimPage);
        this.showMessage(`Bienvenido a tu VecindApp!`);
      }, 2000);
    } else {
      this.user.password = '';
      this.showMessage('Usuario y/o contraseña incorrecta, intente nuevamente');
    }
  }
}
