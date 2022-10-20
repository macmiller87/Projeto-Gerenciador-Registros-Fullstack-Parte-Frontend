import { Component, Injectable, OnInit } from '@angular/core';
import { RestApiService } from '../../../services/rest-api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html'
})

@Injectable()
export class EmployeeEditComponent implements OnInit {

  constructor(
    private restApi: RestApiService,
    public copiaRota: ActivatedRoute,
    private rota: Router
  ) { }

  tituloComp: string = "Change Record";

  copiaRoute = this.copiaRota.snapshot.params["id"];

  atualizarDados: any = {};

  ngOnInit(): void {

    this.restApi.acessarUmRegistro(this.copiaRoute).subscribe((dados: any) => {
      this.atualizarDados = dados;
    });

  }

  atualizandoDados() {

    if(confirm("Are you sure you want to change the registry?")) {
      this.restApi.alterarDados(this.copiaRoute, this.atualizarDados).subscribe(() => {
        this.rota.navigate(["/employees-list"]);
      });
    }

  }

}
