import { useState } from "react"    
import { FaHeart, FaMapMarked } from "react-icons/fa";


function DinamicList() {

    const [bairros, setBairros] = useState([
        { id: 1, nome: '15 de Fevereiro' },
        { id: 2, nome: 'Talatona' },
        { id: 3, nome: 'Simione' }
    ])

    const [novoBairro, setNovoBairro] = useState('');

    function AddBairro() {
        if (novoBairro === '') return;

        const novaEntrada = {
            id: Math.random(),
            nome: novoBairro
        }

        setBairros([...bairros, novaEntrada]);

        setNovoBairro('')
    }


    return (
        <section>

            <div className="w-md m-auto flex gap-4 p-4 bg-gray-50 shadow">
                <input type="text" name="novoBairro" id="novoBairro" placeholder="insira um novo bairro... " onChange={(e) => setNovoBairro(e.target.value)}
                    className="flex-1 p-2 border-2 border-blue-200 outline-none"
                />
                <button type="button" onClick={AddBairro}
                    className="p-2 bg-emerald-500 text-white active:scale-95 cursor-pointer transition ease-in-out duration-300 flex items-center gap-1">
                    Adicionar Bairro <FaMapMarked/>
                </button>
            </div>

            <ul className="w-md m-auto flex flex-col gap-4 p-4 bg-gray-50 shadow text-gray-600">
                {bairros.map((eachBairro) => (
                    <li key={eachBairro.id} className="border-b-2 border-blue-200 flex items-center gap-1"><FaHeart className="text-red-500"/><FaHeart className="text-yellow-300"/><FaHeart className="text-black"/>{eachBairro.nome}</li>
                ))}
            </ul>
        </section>
    )

}

export default DinamicList