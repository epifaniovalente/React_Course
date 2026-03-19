import { useState } from "react";

export default function FormValid() {
    const [name, setName] = useState("")
    const [classe, setClasse] = useState("")
    const [erros, setErros] = useState({})

    const validar = (e)=>{
        e.preventDefault();
        let mensageErro = {};

        if (name.length < 3) {
            mensageErro.name = <p className="text-sm text-red-500">O nome deve conter pelo menos 3 caracteres</p>
        }

        if (!classe) {
            mensageErro.classe = <p className="text-sm text-red-500">Por favor, Selecione uma classe</p>
        }
        
        setErros(mensageErro);

        if (Object.keys(mensageErro).length === 0) {
            setClasse("");
            setName("")
            alert("Formulário envido com sucesso!");
        }
    }

    return(
        <form onSubmit={validar} className="bg-black text-gray-500 w-fit p-5 m-auto">
            <div>
                <label className="block">Full Name</label>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)} className={`w-full p-2 rounded-2xl border text-sm ${erros.name? "border-red-500": "border-gray-500"}`}/>
                {erros.name && <>{erros.name}</>}
            </div>

            <div>
                <label className="block">Classe</label>
                <select value={classe} onChange={(e)=> setClasse(e.target.value)} className={`w-full border rounded-2xl text-sm p-2 ${erros.classe ? "border-red-500" :"border-gray-500"}`}>
                    <option value="">Selecione...</option>
                    <option value="10">10ª Classe</option>
                    <option value="12">12ª Classe</option>
                </select>
                {erros.classe && <>{erros.classe}</>}
            </div>

            <button type="submit">
                Enviar Matricula
            </button>
        </form>
    )
}