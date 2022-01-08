//definindo condicionais a partir de parâmetros
interface IUsuario {
  id: number;
  email: string;
}

interface IAdmin extends IUsuario{
    cargo: 'gerente' | 'coordenador' |'supervisor';
}

//IUsuario ou IAdmin
function redireciona2(usuario: IUsuario | IAdmin){
    // if (usuario.cargo) //erro pq usuario não tem cargo
    //verifico se tem o cargo no usuário
    if ('cargo' in usuario){
        //redireciono para adm
    }else{
        //redireciono para usuario
    }
}