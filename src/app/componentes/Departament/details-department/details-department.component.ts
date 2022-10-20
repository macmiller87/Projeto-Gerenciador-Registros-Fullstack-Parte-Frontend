import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiDepartmentsService } from 'src/app/services/rest-api-departments.service';

@Component({
  selector: 'app-details-department',
  templateUrl: './details-department.component.html'
})

@Injectable()
export class DetailsDepartmentComponent implements OnInit {

  constructor(
    public restApi: RestApiDepartmentsService,
    public rota: Router
  ) { }

  tituloComp: string = "Departments Details";

  lerDados: any = [];

  ngOnInit(): void {
    this.listaDadosDepartamento();
  }

  listaDadosDepartamento() {

    this.restApi.lerDadosDepart().subscribe((dados: {}) => {
      this.lerDados = dados;
    });

  }

  retornaLista() {

    this.rota.navigate(["/departments-list"]);

  }

}
