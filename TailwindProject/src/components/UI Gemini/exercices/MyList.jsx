import { useState } from "react"

function MyList() {

    const [cursos, setCursos] = useState([
        { id: 1, nome: "Python", escola: "Jacimira" },
        { id: 2, nome: "Ruby", escola: "Rejuma" },
        { id: 3, nome: "React", escola: "Parakletos" }
    ])

    return (

        <div className="text-gray-600 font-medium p-6">
            <h3 className="text-green-600">Veje sua lista de cursos</h3>
            <ul className="list-inside">
                {cursos.map((curso) => (
                    <li key={curso.id}>{curso.nome} - {curso.escola}</li>
                ))}
            </ul>
        </div>
    )
}

export default MyList