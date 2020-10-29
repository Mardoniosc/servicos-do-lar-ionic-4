import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Usuario } from 'src/shared';
import { StorangeService } from 'src/shared/services';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.page.html',
  styleUrls: ['./administrador.page.scss']
})
export class AdministradorPage implements OnInit {
  usuarios: Usuario[] = [
    { id: 1, nomeSobrenome: 'Fernando Cledicis', localidade: 'São Sebastião' },
    { id: 2, nomeSobrenome: 'Marcos Hyodao', localidade: 'Aguas Claras' },
    { id: 3, nomeSobrenome: 'Natasha Pixai', localidade: 'Luziânia' },
    { id: 4, nomeSobrenome: 'Maria Miclous', localidade: 'Ocidental' },
    { id: 5, nomeSobrenome: 'Helena Lowoil', localidade: 'Guará' },
    { id: 6, nomeSobrenome: 'Luiz Duguba', localidade: 'Taguatinga' }
  ];

  constructor(
    public navCtrl: NavController,
    public menu: MenuController,
    public storangeService: StorangeService
  ) {}

  ngOnInit() {}

  detalhesUser(user: Usuario) {
    this.storangeService.setLocalUser(user);
    this.navCtrl.navigateForward('/details-user');
  }

  logout(): void {
    this.navCtrl.navigateRoot('/login');
  }
}
