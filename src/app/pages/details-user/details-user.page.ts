import { Component, OnInit } from '@angular/core';
import {
  AlertController,
  LoadingController,
  MenuController,
  NavController
} from '@ionic/angular';
import { Usuario } from 'src/shared';
import { StorangeService } from 'src/shared/services';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.page.html',
  styleUrls: ['./details-user.page.scss']
})
export class DetailsUserPage implements OnInit {
  file = null;

  autoManufacturers;

  usuario: Usuario = this.storangeService.getLocalUser();

  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public loadingCtl: LoadingController,
    public storangeService: StorangeService,
    public alertCtrl: AlertController
  ) {}

  ngOnInit() {}

  atualizaArquivo(event) {
    this.file = event.srcElement.files[0];
    console.log(this.file.name);
  }

  async enviarArquivo() {
    const loader = await this.presentLoading('Enviado arquivo...');
    if (!this.file) {
      loader.dismiss();
      this.alertmsg('Boleto', `Nenhum arquivo selecionado`);
      return;
    }
    setTimeout(() => {
      loader.dismiss();
      this.alertmsg('Boleto', `Boleto ${this.file.name}, enviado com sucesso!`);
      this.file = null;
    }, 2000);
  }
  // ionViewDidLoad() {}

  async presentLoading(msg: string) {
    const loading = await this.loadingCtl.create({
      message: msg
    });
    loading.present();
    return loading;
  }

  async alertmsg(title: string, mensagem: string) {
    let alert = await this.alertCtrl.create({
      header: title,
      message: mensagem,
      buttons: ['OK']
    });
    await alert.present();
  }
}
