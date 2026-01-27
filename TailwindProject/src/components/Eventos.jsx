import Button from "./Button";

function Eventos() {

  function meuEvento() {
    console.log("primeiro Evento Ativado");
  }

  function segundoEvento() {
    console.log("Segundo evento activado!");
  }

  return (
    <>
    <p>clique para disparar um evento:</p>
    <Button event={meuEvento} text="primeiro evento"/>
    <Button event={segundoEvento} text="Segundo evento"/>
    </>
  );
}

export default Eventos;
