import { Component } from "@angular/core";
import { NavController, NavParams } from "@ionic/angular";
import { Servico } from "src/shared";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage {
  servicos: Array<Servico> = [
    {
      id: 1,
      nome: "Elétrico",
      telefone: "5561984137835",
      mensagem: "Bom dia, sobre os serviços eletricos",
    },
    {
      id: 2,
      nome: "Hidráulico",
      telefone: "5561984137835",
      mensagem: "Bom dia, sobre os serviços Hidráulicos",
    },
    {
      id: 3,
      nome: "Transporte",
      telefone: "5561984137835",
      mensagem: "Bom dia, sobre os serviços de transporte",
    },
    {
      id: 4,
      nome: "Informática",
      telefone: "5561984137835",
      mensagem: "Bom dia, sobre os serviços de informatica",
    },
    {
      id: 5,
      nome: "Marcenaria",
      telefone: "5561984137835",
      mensagem: "Bom dia, sobre os serviços de marcenaria",
    },
  ];

  constructor(public navCtrl: NavController) {}

  apiwhatsapp(servico: Servico): string {
    const mensagem = servico.mensagem;
    const fone = servico.telefone;
    const link = `https://wa.me/${fone}?text=${mensagem}`;
    return link;
  }
}
