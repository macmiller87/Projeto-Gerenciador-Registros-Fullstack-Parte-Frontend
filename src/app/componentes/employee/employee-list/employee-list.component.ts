import { Component, Injectable, OnInit } from '@angular/core';
import { RestApiService } from '../../../services/rest-api.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})

@Injectable()
export class EmployeeListComponent implements OnInit {

  tituloComp: string = "List of Employees";

  listaColaboradores: any = [];

  constructor(public restApi: RestApiService) { }

  ngOnInit(): void {
    this.exibirRegistros();
  }

  exibirRegistros() {
    this.restApi.lerDadosColab().subscribe((dados: {}) => {
      this.listaColaboradores = dados;
    });
  }

  excluirColaborador(id: any) {

    if(confirm("Are you sure you want to delete this record?")) {
      this.restApi.excluirDados(id).subscribe(() => { this.exibirRegistros() });
    }

  }

}
