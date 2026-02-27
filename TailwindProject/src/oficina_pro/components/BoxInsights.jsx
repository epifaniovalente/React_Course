import BoxServices from "./BoxServices"
import Paragrafo from "./Paragrafo"
import TextSmall from "./TextSmall"
import Titulo_img from "./Titulo_img"

function BoxInsights({userName,marcaCarro,quntServico,descricao,dataRealizada,tipoServico,statusServico,dataAtendimento}) {
    return(
        <article className="bg-gray-800/25 flex flex-col gap-3.5 flex-1 min-w-3xs max-w-full rounded-2xl border border-gray-800 overflow-hidden py-5 px-4">
            <div className="flex items-center justify-between gap-2">
                <p>
                    <Titulo_img text={userName}/>
                    <TextSmall text={marcaCarro} color="text-gray-400" />
                </p>
                <span>
                    <TextSmall text={quntServico} color="text-cyan-300" background="bg-slate-800" padding="px-2 py-0.5" radios="rounded-xl"/>
                </span>
            </div>
            <Paragrafo text={descricao} color="text-gray-400" weight="font-normal"/>

            <div className="flex flex-col gap-2">
                <Paragrafo text="Historico recente" color="text-cyan-200" weight="font-medium"/>
                <BoxServices dataRealizadas={dataRealizada} tipoServicos={tipoServico} statusServicos={statusServico}/>

                <BoxServices dataRealizadas={dataRealizada} tipoServicos={tipoServico} statusServicos={statusServico}/>

                <BoxServices dataRealizadas={dataRealizada} tipoServicos={tipoServico} statusServicos={statusServico}/>
                <TextSmall text={`Último atendimento: ${dataAtendimento}`} color="text-green-200/80" background="bg-green-900/30" padding="px-2 py-1.5" radios="rounded-xl" />
                
            </div>

        </article>
    )
}

export default BoxInsights