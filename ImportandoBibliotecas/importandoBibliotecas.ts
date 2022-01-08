//importar a biblioteca sem alterar os tipos existentes
//quando declaro duas interfaces com o mesmo nome, a aplicação une essas interfaces
//Exemplo
interface Estudante{
    nome: string;
    idade: number;
}

interface Estudante{
    serie: string;
}

const estudante: Estudante = {
    nome:'Janaina',
    idade: 14,
    serie: '2ª'
}

//necessário instalar o jquery
import $ from 'jquery';

    $.fn.extend({
      novaFuncao(){
        console.log("Chamou nova funcao");
      }
    });
    //não apresenta erro porque redefini a função no typing.d.ts
    $('body').novaFuncao();

  //export permite exportar uma variável/funcao/classe e expondo ela
  export const numero = 14;

  //importando a variavel
  // import {numero} from './importantoBibliotecas.ts';