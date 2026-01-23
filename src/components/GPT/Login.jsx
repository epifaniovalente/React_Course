import { useState } from "react";

function Login() {
  const [logado, setLogado] = useState(false);
  return (
    <>
      <h3>{logado ? "Bem-vindo de Volta!" : "Faça Login"}</h3>
      {logado ? (
        <button type="button" onClick={() => setLogado(false)}>
          Sair
        </button>
      ) : (
        <button type="button" onClick={() => setLogado(true)}>
          Entrar
        </button>
      )}
    </>
  );
}

export default Login;
