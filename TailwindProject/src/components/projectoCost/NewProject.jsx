import { useHistory } from "react-router-dom";

import Form from "./Form";

function NewProject() {

    const history = useHistory();

    function createPost(project) {
        project.cost = 0
        project.servicves = []

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(projects)
        })
            .then((resposta) => resposta.json())
            .then((data) => { console.log(data) })
            .catch(erro => (console.log(erro)))
    }

    return (
        <section className="w-md m-auto p-8">
            <h1 className="text-black text-2xl font-bold mb-2">
                Criar Projecto
            </h1>
            <p className="text-gray-600">
                Crie seu projecto para depois adicionar os serviços
            </p>
            <Form btnText="Criar Projecto" handleSubmit={createPost} />
        </section>
    )
}

export default NewProject;