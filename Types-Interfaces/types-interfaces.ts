//definir o tipo da variável na função
function soma(a: number, b: number) {
    return a + b;
  }
  
  //soma('a','b'); //erro
  soma(10, 20);
  
  //types = equivalene a struct em c, usados para fazer junções das nossas interfaces
  type IAnimal2 = {
    nome: string;
    tipo: "terreste" | "aquatico";
    executarRugido(altura: number): void;
    domestico: boolean;
  };
  
  interface ICanino extends IAnimal {
    porte: "pequeno" | "medio" | "grande";
  }
  
  type IDomestico = IFelino | ICanino;
  
  const dog: IDomestico = {
    nome: "MeuDog",
    tipo: "terreste",
    porte: "medio",  
    executarRugido: (altura) => `${altura}BD`,
  };
  
  //interface = contrato para implementar as classes, obrigatório implementar
  interface IAnimal {
    nome: string;
    tipo: "terreste" | "aquatico";
    executarRugido(altura: number): void;
  }
  
  const animal: IAnimal = {
    nome: "Doguinho",
    tipo: "terreste", // só aceita os tipos pré definidos na interface
    executarRugido: (altura) => `${altura}BD`,
  };
  
  animal.executarRugido(45);
  
  //estender interface
  interface IFelino extends IAnimal {
    visaoNoturna: boolean;
  }
  
  const felino: IFelino = {
    nome: "Leao",
    tipo: "terreste",
    visaoNoturna: true,
    executarRugido: (altura) => `${altura}BD`,
  };
  