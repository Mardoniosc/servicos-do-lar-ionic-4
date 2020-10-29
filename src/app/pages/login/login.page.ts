import { Component, OnInit } from '@angular/core';
import {
  LoadingController,
  MenuController,
  NavController
} from '@ionic/angular';

export interface Credenciais {
  email: string;
  senha: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  creds: Credenciais = {
    email: '',
    senha: ''
  };

  constructor(
    public loadingCtrl: LoadingController,
    public menu: MenuController,
    public navCtrl: NavController
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.menu.enable(false);
  }

  async login() {
    const load = await this.presentLoading('Autenticando');
    setTimeout(() => {
      load.dismiss();
      this.autenticacao();
    }, 1500);
  }

  autenticacao() {
    if (this.creds.email === 'admin' && this.creds.senha === 'admin') {
      this.navCtrl.navigateRoot('administrador');
    } else {
      this.menu.enable(true);
      this.navCtrl.navigateRoot('home');
    }
  }

  async presentLoading(msg: string) {
    const loading = await this.loadingCtrl.create({
      message: msg
    });
    loading.present();
    return loading;
  }
}
