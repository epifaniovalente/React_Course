import { useState } from "react";
import Button from './Button'

function Condicional() {
  const [email, setEmail] = useState();
  const [userEmail, setuserEmail] = useState();

  function enviar(e) {
    e.preventDefault();
    console.log("Testando...");
    setuserEmail(email);
  }

  function limparEmail() {
    setuserEmail('');
  }

  return (
    <>
      <h2>Cadastre seu e-mail:</h2>
      <form>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Seu e-mail..."
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
      <br />
      <button type="submit" onClick={enviar}>
        Enviar
      </button>
      {userEmail && (
        <div>
          <p>
            O email do usuario é: <strong>{userEmail}</strong> 
          </p>
          <Button event={limparEmail} text="Limpar email"/>
        </div>
      )
      }
    </>
  );
}

export default Condicional;
