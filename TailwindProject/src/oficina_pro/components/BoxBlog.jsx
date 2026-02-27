import Ancora from "./Ancora"
import Paragrafo from "./Paragrafo"
import Subtitulo from "./Subtitulo"
import Titulo from "./Titulo"

function BoxBlog({ subtitulo, titulo, paragrafo, link }) {
    return (
        <article className="flex-1 md:max-w-80  border border-gray-800 p-3 rounded-2xl flex flex-col items-start justify-between gap-3.5 bg-slate-900 overflow-hidden">
            <Subtitulo text={subtitulo}/>
            <div className="space-y-1.5">
            <Titulo text={titulo} tamanho="text-sm"/>
            <Paragrafo text={paragrafo} color="text-gray-400"/>
            </div>
            <Ancora text={link}/>
        </article>
    )
}

export default BoxBlog