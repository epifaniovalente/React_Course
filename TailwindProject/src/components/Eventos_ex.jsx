import { useState } from "react";

function Eventos_ex() {

    const [contador, setContador] = useState(0)
    const [nome, setNome] = useState();
    const [sms, setSMS] = useState("")
    const user = "Epifanio";

    function incrementar() {
        setContador(contador + 1)
    }

    function decrementar() {
        setContador(contador - 1)
        // if (contador < 0) {
        //     setSMS("Passando para valores negativos")
        // }else{
        //     setSMS("")
        // }
    }

    function resetar() {
        setContador(0)
    }

    function EnviarSms() {
        setSMS(`Olá! ${user}, Saudações.`)
    }

    function handChange(event){
        setNome(event.target.value)
    }

    return (
        <>
            <p>Valor actual {contador} </p>
            <p>{sms} </p>
            <p>Ola: {nome} </p>
            <button type="button" onClick={incrementar}>
                Incrementar(+)
            </button>
            <br />
            <br />
            <button type="button" onClick={decrementar}>
                Decrementar(-)
            </button>
            <br />
            <br />
            <button type="button" onClick={resetar}>
                Reesetar (0)
            </button>
            <br />
            <br />
            <button type="button" onClick={EnviarSms}>
                Ver sms
            </button>
            <br />
            <br />
            <h3>Formulario Simples</h3>
            <input type="text" onChange={handChange}/>
        </>
    )


}
export default Eventos_ex