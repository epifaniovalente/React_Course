import { useState } from "react"

export function DependantSelects() {

    const data = {
        "10ª classe": ["Informatica", "Contabilidade", "Eletronica"],
        "11ª classe": ["Multimedia", "Comunicação", "Gestão"],
        "12ª classe": ["Dev Software", "Segurança", "Design"]
    }

    const [selectedClasse, setSelectedClasse] = useState("")
    const [selectedCourse, setSelectedCourse] = useState("")

    const classes = Object.keys(data)

    return (
        <section className="bg-gray-400 p-6 w-fit rounded-2xl text-gray-100">

            <div>
                <label className="block">Selecione a classe</label>
                <select value={selectedClasse} onChange={(e) => { setSelectedClasse(e.target.value); setSelectedCourse(""); }} className={`border border-slate-700 p-2 rounded-xl text-slate-900`} >
                    <option value="" disabled>--Escolha a classe--</option>

                    {classes.map((c) => (
                        <option key={c} value={c} >{c}</option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block">Selecione o curso</label>
                <select value={selectedCourse} onChange={(e)=> setSelectedCourse(e.target.value)} disabled={!selectedClasse} className={`border border-slate-700 p-2 rounded-xl text-slate-900 ${!selectedClasse? 'cursor-not-allowed':'cursor-pointer'}`}>
                    
                    <option value="">--Escolha o curso--</option>
                    {selectedClasse && data[selectedClasse].map((course)=>(
                        <option key={course} value={course}>{course}</option>
                    ))}
                </select>
            </div>

        </section>
    )
}