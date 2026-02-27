import { useEffect, useState } from "react";

import Input from "./Input";
import Select from "./Select";
import SubmitButton from "./SubmitButton";

function Form({ handleSubmit, btnText, projectData }) {
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resposta) => resposta.json())
            .then((data) => { setCategories(data) })
            .catch((erro) => console.log(erro))
    }, [])

    const submit = (e)=>{
        e.preventDefault();
        handleSubmit(project)
    }

    return (
        <form onSubmit={submit} className="w-full py-4">

            <Input type="text" text="Nome do Projecto" name="name" placeholder="insira o nome do projecto" />
            <Input type="number" text="Orçamento do Projecto" name="budget" placeholder="insira o orçamento total" />
            <Select name="category_id" text="Selecione a categoria" options={categories} />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default Form;