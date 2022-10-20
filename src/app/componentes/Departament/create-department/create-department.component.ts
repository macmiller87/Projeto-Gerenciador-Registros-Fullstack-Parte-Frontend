import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiDepartmentsService } from 'src/app/services/rest-api-departments.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html'
})

@Injectable()
export class CreateDepartmentComponent implements OnInit {

  titleComp: string = "Create Department";

  @Input() DataDepartment = {

    id: "",
    nameDepartment: ""

  }

  constructor(
    public restApi: RestApiDepartmentsService,
    public route: Router
  ) { }

  ngOnInit(): void {
  }

  createDepartment() {

    this.restApi.inserirDadosDepart(this.DataDepartment).subscribe(() => {
      this.route.navigate(["/departments-list"]);
    });

  }

}
