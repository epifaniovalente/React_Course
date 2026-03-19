import { useState } from "react"
import Botao from "./Botao"
import Input from "./Input"
import Select from "./Select"
import TextSmall from "./TextSmall"

function FormAgendamento({ text_btn }) {


    const servicos = [
        { id: 1, texto: "Troca de Oleo" },
        { id: 2, texto: "Revisão" },
        { id: 3, texto: "Eletricidade" },
        { id: 4, texto: "Motor" },
        { id: 5, texto: "Suspensão" }

    ]

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [servico, setServico] = useState("");
    const [data, setData] = useState("");
    const [horario, setHorario] = useState("");
    const [erros, setErros] = useState({})

    const validacao = (e) => {
        e.preventDefault();
        let mensageErros = {}
        let mensageSucesso;


        if (nome.length < 12) {
            mensageErros.name = "O nome deve conter pelo menos 12 caracteres *"
        }
        if (telefone.length < 9) {
            mensageErros.telefone = "Digite corretamente o nº de telefone!"
        }
        if (email.length < 12) {
            mensageErros.email = "Digite corretamente seu email!"
        }
        if (!servico) {
            mensageErros.servico = "Escolha um serviço, por favor!"
        }
        if (data.length === 0) {
            mensageErros.data = "Escolha a sua data, por favor!"
        }
        if (horario.length === 0) {
            mensageErros.horario = "Escolha o seu horario, por favor!"
        }
        setErros(mensageErros)

        if (Object.keys(mensageErros).length === 0) {
            mensageSucesso = <p className="text-green-400 shadow text-center max-w-2xs">
                Agenadamento Enviado com sucesso, aguarde pelo nosso email. Obrigado pela preferência
            </p>
        }

    }
    return (
        <article className="bg-slate-950 py-4 px-4 rounded-2xl border border-gray-800/80 space-y-3 mt-6">
            <form className="grid grid-cols-2 gap-3" onSubmit={validacao}>
                <div>
                    <Input text="Nome completo" type="text" name="nome" handleOnChange={(e) => setNome(e.target.value)} placeholder="Ex.: Maria Cardoso" />
                    <TextSmall text={erros.name} color={`text-red-500`} />
                </div>
                <div>
                    <Input text="Telefone" type="text" name="telefone" handleOnChange={(e)=>setTelefone(e.target.value)} placeholder="(+244) 923 xxx xxx" />
                    <TextSmall text={erros.telefone} color={`text-red-500`}/>
                </div>

                <div className="col-span-2">
                    <Input text="E-mail" type="email" name="nome" handleOnChange={(e)=>setEmail(e.target.value)} placeholder="voce@email.com" />
                    <TextSmall text={erros.email} color={`text-red-500`}/>
                </div>

                <div className="col-span-2">
                    <select onChange={(e)=>setServico(e.target.value)} className="w-full text-sm outline-none border-2 border-gray-800 py-1.5 px-2.5 rounded-xl text-gray-300 bg-slate-800/20 placeholder:text-gray-500">
                        <option value="" className="bg-slate-800">--Selecione uma opção--</option>
                        {servicos.map(s => (
                            <option key={s.id} value={s.texto} className="bg-slate-800">{s.texto}</option>
                        ))}
                    </select>
                    <TextSmall text={erros.servico} color={`text-red-500`}/>
                </div>
                <div>
                    <Input type="date" text="Data" name="dataArealizar" handleOnChange={(e)=>setData(e.target.value)} />
                    <TextSmall text={erros.data} color={`text-red-500`}/>
                </div>

                <div>
                    <Input type="time" text="horário" name="horario" handleOnChange={(e)=>setHorario(e.target.value)}/>
                    <TextSmall text={erros.horario} color={`text-red-500`}/>
                </div>

                <div className="col-span-2">
                    <Botao type="submit" text="Confirmar agendamento" color="text-slate-900" background="bg-cyan-500" width="w-full" />
                </div>
            </form>
            <TextSmall text="Ao confirmar você receberá um e-mail com o resumo do serviço e poderá acompanhar tudo pelo painel do cliente." />
        </article>
    )
}

export default FormAgendamento