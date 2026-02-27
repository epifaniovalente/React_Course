import Subtitulo from "./Subtitulo";
import TextSmall from "./TextSmall";
import Titulo from "./Titulo";

function BoxHome({ texto, numero }) {
    return (
        <article className="border border-gray-800 p-2.5 rounded-xl bg-slate-800/20 flex flex-col gap-2">
            <TextSmall text={texto} color={`text-gray-500`}/>
            <Titulo text={numero}/>
        </article>
    )
}

export default BoxHome