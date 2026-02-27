import Botao from "./Botao"
import Input from "./Input"
import Select from "./Select"
import TextSmall from "./TextSmall"

function FormAgendamento({text_btn,validacao}) {
    return(
        <article className="bg-slate-950 py-4 px-4 rounded-2xl border border-gray-800/80 space-y-3 mt-6">

        <form className="grid grid-cols-2 gap-3" onSubmit={validacao}>
            <Input text="Nome completo" type="text" name="nome"placeholder="Ex.: Maria Cardoso" />
            <Input text="Telefone" type="text" name="telefone" placeholder="(+244) 923 xxx xxx" />
            <div className="col-span-2">
            <Input text="E-mail" type="email" name="nome"placeholder="voce@email.com" />
            </div>
            <div className="col-span-2">
            <Select text="Serviço desejado" name="servico"/>
            </div>
            <Input type="date" text="Data" name="dataArealizar"/>
            <Input type="time" text="horário" name="horario"/>
            <div className="col-span-2">
            <Botao text="Confirmar agendamento" color="text-slate-900" background="bg-cyan-500" width="w-full"/>
            </div>
        </form>
        <TextSmall text="Ao confirmar você receberá um e-mail com o resumo do serviço e poderá acompanhar tudo pelo painel do cliente."/>
        </article>
    )
}

export default FormAgendamento