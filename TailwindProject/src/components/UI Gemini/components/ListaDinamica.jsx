import { useState } from "react"

function ListaDinamica() {

    const [alunos, setAlunos] = useState([
        { id: 1, nome: "Epifânio" },
        { id: 2, nome: "Gilson" },
        { id: 3, nome: "Kinavuidi" }
    ])

    const [novoAluno, setNovoAluno] = useState('')

    function AddAluno() {
        if (novoAluno === '') return;

        //Criar um novo Objecto

        const novaEntrada = {
            id: Math.random(),
            nome: novoAluno + " - EpiCoder"
        }

        setAlunos([...alunos, novaEntrada])

        setNovoAluno('')
    }

    return (
        <section className="w-2xl m-auto">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
                Minha trilha Tech
            </h2>

            <div className="flex gap-4">
                <input type="text" name="nome" value={novoAluno}
                    onChange={(e) => setNovoAluno(e.target.value)}
                    placeholder="ex.: zeferino"
                    className="flex-1 border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 ring-blue-500 transition duration-300 ease-in-out"
                />
                <button type="button"
                    onClick={AddAluno}
                    className="bg-blue-600 text-white p-2 rounded-lg font-bold">
                    Add
                </button>
            </div>

            <ul className="space-y-3 mt-4 w-">
                {alunos.map((aluno) => (
                    <li key={aluno.id} className="p-3 text-slate-700 rounded-lg border border-blue-500">  {aluno.nome}</li>
                ))}
            </ul>
        </section>
    )
}

export default ListaDinamica