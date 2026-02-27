import { useState } from "react";
import Botao from "./Botao";

function Contador() {
    const [valor, setValor] = useState(0);



    return (
        <section className="flex flex-col items-center gap-4 p-6 bg-white rounded-2xl shadow-md w-64">
            <h3>Contador</h3>
            <span className="text-slate-800 font-bold text-2xl">{valor}</span>
            <div className="flex gap-4">
                <Botao text="+" onClick={()=>setValor(valor + 1)} color="bg-green-100"/>
                <Botao text="Reset" onClick={()=>setValor(0)} color="bg-gray-600"/>
                <Botao text="-" onClick={()=>setValor(valor -1)} color="bg-red-100"/>
            </div>
        </section>
    )
}

export default Contador