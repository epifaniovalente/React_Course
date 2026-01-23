import { useState } from "react";

function Condicional() {
  const [mostrar, setMostrar] = useState(false);
  let conteudo="";
  if (mostrar) conteudo= <p>Conteudo está visivel!</p>
      else conteudo=<p>Conteudo não está visivel!</p>
      
  return (
    <>
      <h2>Renderização condicional</h2>
      <button type="button" onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Esconder" : "Mostrar"} Mensagem
      </button>
      {mostrar && <p>Olá, EpiCoder</p>}

    <p>{conteudo}</p>
    </>
  );
}

export default Condicional;
