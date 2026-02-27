import { useState } from "react"

function App() {
    const [contador, setContador] = useState();

    function clicou() {
        setContador(contador + 1)
        setContador(contador + 1)
    }
    
    return (
        <section>
            <button type="button" onClick={clicou}>
                {contador}
            </button>
        </section>
    )
}
export default Code1