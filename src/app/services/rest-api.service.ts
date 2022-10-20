import { Injectable } from '@angular/core';
import { Employee } from "../model/employee";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Errors } from '../error/Errors';

@Injectable()
export class RestApiService {

  apiURL: string = "http://localhost:8082/api/v1";

  private erroHandle = new Errors();

  constructor(
    private reqHttp: HttpClient,
  ) { }

  autorizacaoAcesso = {
    headers: new HttpHeaders({
      "content-Type": "application/json"
    })
  };

  inserirDados(dadosRecebidos: any): Observable<Employee> {

    return this.reqHttp
    .post<Employee>(this.apiURL+"/employee", JSON.stringify(dadosRecebidos), this.autorizacaoAcesso)
    .pipe(
      retry(1),
      catchError(this.erroHandle.appErro)
    );

  };

  alterarDados(id: any, novosDados: any): Observable<Employee> {

    return this.reqHttp
    .put<Employee>(this.apiURL+"/employee/"+id, JSON.stringify(novosDados), this.autorizacaoAcesso)
    .pipe(
      retry(1),
      catchError(this.erroHandle.appErro)
    );

  };

  excluirDados(id: any) {

    return this.reqHttp
    .delete<Employee>(this.apiURL+"/employee/"+id, this.autorizacaoAcesso)
    .pipe(
      retry(1),
      catchError(this.erroHandle.appErro)
    )

  };

  acessarUmRegistro(id: any): Observable<Employee> {

    return this.reqHttp.get<Employee>(this.apiURL+"/employee/"+id)
    .pipe(
      retry(1),
      catchError(this.erroHandle.appErro)
    );

  };

  lerDadosColab(): Observable<Employee> {

    return this.reqHttp.get<Employee>(this.apiURL+"/employees")
    .pipe(
      retry(1),
      catchError(this.erroHandle.appErro)
    );

  };

}
