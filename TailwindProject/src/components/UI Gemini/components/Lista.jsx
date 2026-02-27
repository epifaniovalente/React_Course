import { useState } from "react";

function Lista() {


    const [tecnico, setTecnico] = useState([
        { id: 1, name: 'React', level: 'iniciante' },
        { id: 2, name: 'Tailwind CSS', level: 'intermediario' },
        { id: 3, name: 'JavaScript', level: 'basico' }
        
    ]);

    return(
        <section className="p-6 bg-white rounded-lg shadow-md max-w-md border border-gray-100">
            <h3 className="text-lx font-bold text-shadow-gray-800 text-center">Minha lista Tech</h3>

            <ul className="space-y-4">
                {tecnico.map((tec)=>(
                    <li key={tec.id} >{tec.name} - {tec.level}</li>
                ))
                }
            </ul>

        </section>
    )
}

export default Lista