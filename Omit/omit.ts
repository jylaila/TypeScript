interface IPessoa{
    nome: string;
    idade: number;
    nacionalidade: string;
}

//permite omitir um valor da interface{
interface IBrasileiro extends Omit<IPessoa, 'nacionalidade'>{

}

//não preciso usar a propriedade
const brasil: IBrasileiro = {
    nome: 'Janaina',
    idade: 18,
}