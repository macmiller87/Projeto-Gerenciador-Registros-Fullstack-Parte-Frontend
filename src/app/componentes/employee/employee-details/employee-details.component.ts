import { Component, Injectable, OnInit } from '@angular/core';
import { RestApiService } from "../../../services/rest-api.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html'
})

@Injectable()
export class EmployeeDetailsComponent implements OnInit {

  constructor(
    public restApi: RestApiService,
    public rota: Router
  ) { }

  tituloComp: string = "Registry Details";

  lerDados: any = [];

  ngOnInit(): void {

    this.listaDadosUsuario();

  }

  listaDadosUsuario() {

    this.restApi.lerDadosColab().subscribe((dados: {}) => {
      this.lerDados = dados;
    });

  }

  retornaLista() {

    this.rota.navigate(["/employees-list"]);

  }

}
