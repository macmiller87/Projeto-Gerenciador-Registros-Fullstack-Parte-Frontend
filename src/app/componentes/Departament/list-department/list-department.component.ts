import { Component, Injectable, OnInit } from '@angular/core';
import { RestApiDepartmentsService } from 'src/app/services/rest-api-departments.service';

@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
})

@Injectable()
export class ListDepartmentComponent implements OnInit {

  titleComp: string = "List All Departments";

  listDepartments: any = [];

  filter: any = "";

  constructor(
    public restApi: RestApiDepartmentsService
  ) { }

  ngOnInit(): void {
    this.listDepart();
  }

  listDepart() {

    this.restApi.lerDadosDepart().subscribe((dados) => {
      this.listDepartments = dados;
    });

  }

  deleteDepart(id: any) {
    if(confirm("Are you sure you want to delete this record?")) {
      this.restApi.excluirDado(id).subscribe(() => { this.listDepart() });
    }
  }

}

