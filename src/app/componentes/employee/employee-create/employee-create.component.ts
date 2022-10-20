import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiDepartmentsService } from 'src/app/services/rest-api-departments.service';
import { RestApiService } from "../../../services/rest-api.service";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html'
})

@Injectable()
export class EmployeeCreateComponent implements OnInit {

  tituloComp: string = "Create Registry";

  listDepartments: any = [];

  @Input() dadosRegistro = {
    id: "",
    name: "",
    department: "",
    hiringDate: "",
  }

  constructor(
    public restApi: RestApiService,
    public restApiDepart: RestApiDepartmentsService,
    public rota: Router
  ) { }

  ngOnInit(): void {
    this.listDepart();
  }

  criarDados() {
    this.restApi.inserirDados(this.dadosRegistro).subscribe(() => {
      this.rota.navigate(["/employees-list"])
    });
  }

  listDepart() {

    this.restApiDepart.lerDadosDepart().subscribe((dados) => {
      this.listDepartments = dados;
    });

  }

  updateDepartment(event: any) {
    this.dadosRegistro.department = event.target.value;
  }

}
