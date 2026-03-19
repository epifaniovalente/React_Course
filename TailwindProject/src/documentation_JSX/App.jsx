import { useState } from "react"
import FormValid from "./components/FormValid"
import { DependantSelects } from "./components/DependantSelects"
import Animacao from "./components/Animacao"
import Rolagem from "./components/Rolagem"


export default function App() {
    const [casado, setCasado] = useState(false)
    return (
        <main className="bg-slate-800 max-w-5xl min-h-screen m-auto shadow text-center font-serif p-6 ">
        {/* {!casado && <p className="text-green-500"> Parabens você vive maritalmente.</p>}

        {casado ? <p className="text-green-500">We're together in this situation. kkk</p>:<span className="text-red-500">Opa, espero te ver namorando!</span>} */}
        
        <Animacao/>
        <Rolagem/>

        </main>
    )
}