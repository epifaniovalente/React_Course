import Paragrafo from "./Paragrafo"
import TextSmall from "./TextSmall"

function BoxPremium({ icon, tipoServico, descricao, conteudo }) {
    return (
        <article className="bg-slate-800/30 p-4 rounded-2xl border border-gray-800/50 flex flex-col gap-4">
            <div className="flex gap-2 items-center">
                <span className="bg-cyan-400/15 p-2.5 rounded-xl text-center text-xl font-medium text-cyan-400">
                    {icon}
                </span>
                <p>
                    <Paragrafo text={tipoServico} color="text-gray-50" weight="font-medium"/>
                    <Paragrafo text={descricao} color="text-cyan-300" tipoLetra="uppercase" weight="font-light"/>
                </p>
            </div>

            <TextSmall text={conteudo} color="text-gray-400"/>
        </article>
    )
}

export default BoxPremium