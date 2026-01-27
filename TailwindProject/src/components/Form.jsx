import { useState } from "react";

function Form() {
  function cadastrarUser(event) {
    event.preventDefault();
    console.log(`User ${nome} cadastrado com a senha ${senha}!`);
  }
  const [variavel, setVariavel] = useState();
  const [nome, setNome] = useState();
  const [senha, setSenha] = useState();
    
  return (
    <div>
      <h2>Meu Cadastro</h2>
      <form action="" method="post" onSubmit={cadastrarUser}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input type="text" name="nome" id="nome" placeholder="Seu Nome" onChange={(e)=>setNome(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            name="senha"
            id="senha"
            placeholder="Sua senha"
            onChange={(e)=>setSenha(e.target.value)}
          />
          
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Form;
