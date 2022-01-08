interface IUsuario {
    id: number;
    email: string;
    //o sinal de interrogação transforma o dado como opcional, pode ou não estar definido
    cargo?: 'funcionario' | 'gerente' | 'coordenador' |'supervisor';
  }
  
  
  function redireciona(usuario: IUsuario){
      if(usuario.cargo){
          //redirecionar(usuario: cargo);
      }

    //   redireciona para a area do usuario
  }