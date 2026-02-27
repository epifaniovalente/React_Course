import Image from "./Image"
import Paragrafo from "./Paragrafo"
import Titulo_img from "./Titulo_img"

function BoxGaleria({ titulo, paragrafo, src }) {
    return (
        <article className="flex flex-col flex-1 min-w-3xs max-w-full rounded-2xl border border-gray-800 overflow-hidden">
            <Image img={src} alt={titulo}/>
            <div className="flex-1 bg-slate-900 p-3.5">
                <Titulo_img text={titulo}/>
                <Paragrafo text={paragrafo} color="text-gray-400"/>
            </div>
        </article>
    )
}

export default BoxGaleria