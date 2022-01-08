interface ICachorro{
    nome: string;
    idade: number;
    //opcional
    parquefavorito?: string;
}

const cachorro : ICachorro = {
nome: 'Apolo',
idade: 14, 
}

class MeuCachorro implements ICachorro{
    // private idade; //errp
    idade;
    nome;

    constructor(nome, idade){
        this.idade = idade;
        this.nome = nome
    }
}

const cao = new MeuCachorro('Apolo', 14);
//posso acessar as propriedades que deveriam ser privadas
cao.idade = 8;

//preciso definir as propriedades como readonly, interando na interface
type CachorroPrivado ={
    //-? remove os valores opcionais
    +readonly [k in keyof ICachorro]-?:ICachorro[k];
}

//sou obrigada a fornecer o atributo
class MeuCachorro2 implements ICachorro{
    // private idade; //errp
    idade;
    nome;
    parquefavorito;

    constructor(nome, idade){
        this.idade = idade;
        this.nome = nome
    }
}