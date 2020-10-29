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
  usuariosFiltrados: Usuario[] = [];

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

  ngOnInit() {
    this.usuariosFiltrados = this.usuarios;
  }

  filtraUsuarioPeloNome(nome: string): void {
    console.log(nome);
    if (!nome) {
      this.usuariosFiltrados = this.usuarios;
    } else {
      this.usuariosFiltrados = this.usuarios.filter((x) =>
        x.nomeSobrenome.trim().toLowerCase().includes(nome.trim().toLowerCase())
      );
    }
  }

  detalhesUser(user: Usuario) {
    this.storangeService.setLocalUser(user);
    this.navCtrl.navigateForward('/details-user');
  }

  logout(): void {
    this.navCtrl.navigateRoot('/login');
  }
}
