import { Component, OnInit } from "@angular/core";
import {
  LoadingController,
  MenuController,
  NavController,
} from "@ionic/angular";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  constructor(
    public loadingCtrl: LoadingController,
    public menu: MenuController,
    public navCtrl: NavController
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    this.menu.enable(true);
  }

  async login() {
    const load = await this.presentLoading("Autenticando");
    setTimeout(() => {
      load.dismiss();
      this.navCtrl.navigateRoot("home");
    }, 1500);
  }

  async presentLoading(msg: string) {
    const loading = await this.loadingCtrl.create({
      message: msg,
    });
    loading.present();
    return loading;
  }
}
