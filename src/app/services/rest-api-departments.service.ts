import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry } from 'rxjs';
import { Errors } from '../error/Errors';
import { Department } from '../model/department';

@Injectable()
export class RestApiDepartmentsService {

  apiURL: string = "http://localhost:8082/api/v1";

  private erroHandle = new Errors();

  constructor(
    private reqHttp: HttpClient
  ) { }

  autorizacaoAcesso = {
    headers: new HttpHeaders({
      "content-Type": "application/json"
    })
  };

  inserirDadosDepart(dadosRecebidos: any): Observable<Department> {

    return this.reqHttp
    .post<Department>(this.apiURL+"/department", JSON.stringify(dadosRecebidos), this.autorizacaoAcesso)
    .pipe(
      retry(1),
      catchError(this.erroHandle.appErro)
    );

  };

  alterarDado(id: any, novosDados: any): Observable<Department> {

    return this.reqHttp
    .put<Department>(this.apiURL+"/department/"+id, JSON.stringify(novosDados), this.autorizacaoAcesso)
    .pipe(
      retry(1),
      catchError(this.erroHandle.appErro)
    );

  };

  excluirDado(id: any) {

    return this.reqHttp
    .delete<Department>(this.apiURL+"/department/"+id, this.autorizacaoAcesso)
    .pipe(
      retry(1),
      catchError(this.erroHandle.appErro)
    )

  };

  acessarUmRegistro(id: any): Observable<Department> {

    return this.reqHttp.get<Department>(this.apiURL+"/department/"+id)
    .pipe(
      retry(1),
      catchError(this.erroHandle.appErro)
    );

  };

  lerDadosDepart(): Observable<Department> {

    return this.reqHttp.get<Department>(this.apiURL+"/departments")
    .pipe(
      retry(1),
      catchError(this.erroHandle.appErro)
    );

  };

}
