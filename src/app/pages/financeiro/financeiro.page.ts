import { Component, OnInit } from "@angular/core";
import { Financeiro } from "src/shared";

@Component({
  selector: "app-financeiro",
  templateUrl: "./financeiro.page.html",
  styleUrls: ["./financeiro.page.scss"],
})
export class FinanceiroPage implements OnInit {
  url =
    "https://americalatina.dint.fgv.br/sites/americalatina.dint.fgv.br/files/teste33.pdf";

  financeiro: Financeiro[] = [
    {
      nome: "Transporte",
      descricao: "Viagem de Uber",
      valor: 20.37,
      estado: true,
    },
    {
      nome: "Hidraulica",
      descricao: "Conserto de pia",
      valor: 45.0,
      estado: false,
    },
    {
      nome: "Eletrica",
      descricao: "Troca de tomadas",
      valor: 30.5,
      estado: false,
    },
  ];

  constructor() {}

  ngOnInit() {}

  downloadPDF(url: string) {
    const filePDF = window.open(url, "_system", "location=no");
    console.log(filePDF);
  }
}
