import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiDepartmentsService } from 'src/app/services/rest-api-departments.service';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html'
})

@Injectable()
export class EditDepartmentComponent implements OnInit {

  constructor(
    private restApi: RestApiDepartmentsService,
    public copiaRota: ActivatedRoute,
    private rota: Router
  ) { }

  titleComp: string = "Change Record";

  copiaRoute = this.copiaRota.snapshot.params["id"];

  atualizarDados: any = {};

  ngOnInit(): void {
    this.restApi.acessarUmRegistro(this.copiaRoute).subscribe((dados: any) => {
      this.atualizarDados = dados;
    });
  }

  atualizandoDado() {

    if(confirm("Are you sure you want to change the registry?")) {
      this.restApi.alterarDado(this.copiaRoute, this.atualizarDados).subscribe(() => {
        this.rota.navigate(["/departments-list"]);
      });
    }

  }

}
