import { throwError } from "rxjs";

export class Errors {

  appErro(erro: any) {

    let mensagemErro: any = "";

    if(erro.error instanceof ErrorEvent) {
      mensagemErro = erro.error.message;

    }else {
      mensagemErro = `Código do erro: ${erro.status} \n Mensagem do erro é: ${erro.error.message}`
    }

    alert(mensagemErro);
    return throwError(() => mensagemErro);

  };

}
