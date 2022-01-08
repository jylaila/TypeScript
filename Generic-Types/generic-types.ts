//<> indica que a função é generica
//<T> pode ser qualquer coisa, T é o nome dado
function addApendiceLista<T>(array:any[], valor:T){
    return array.map(item => item + valor);
}

function addApendiceLista2<NaoseioTipo>(array:any[NaoseioTipo], valor:NaoseioTipo){
    return array.map(() => valor);
}

//os tipos são inferidos de acordo com os valores informados na chamada da função
addApendiceLista([1,2,3],1);
addApendiceLista(['A', 'B', 'C'],'d');