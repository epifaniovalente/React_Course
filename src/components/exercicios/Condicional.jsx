import { useState } from "react";
import Button from './Button';

function Condicional() {

    const [nome, setNome] = useState();
    const [nomeUser, setNomeUser] = useState();

    function Enviar(e) {
        e.preventDefault();
        setNomeUser(nome)
    }

    function LimparNome() {
        setNomeUser();
    }


    return (
        <>
            <h2>Conditional Form</h2>
            <form>
                <label htmlFor="nome">Seu Nome:</label>
                <input type="text" name="nome" id="nome" placeholder="digite seu nome" onChange={(e) => setNome(e.target.value)} />
                <br />
                <button type="submit" onClick={Enviar}>Enviar</button>
            </form>


            {nomeUser &&(
                <div>
                    <p>Ola! Sr.: {nomeUser} </p>
                    <br />
                    <Button event={LimparNome} text="Começar Agora"/>
                </div>
            )
            }
        </>
    )
}

export default Condicional