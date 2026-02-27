import { FaCamera } from "react-icons/fa"
import BoxGaleria from "./BoxGaleria"
import img_loading from "../image/imgback_loading.jpg"

function Galeria() {
    return (
        <section id="galeria" className="w-full max-w-6xl m-auto p-6">
            <p className="text-cyan-400 uppercase font-semibold text-xs flex items-center gap-2 mb-4"><FaCamera/> Galeria profissional</p>

            <article className="flex flex-col gap-2.5">
                <h2 className="text-3xl text-gray-50 font-bold">
                    Projectos que entregam performance e segurança
                </h2>
                <p className="text-gray-300">
                    Transparência total em cada etapa: registramos os principais momentos para compartilhar <br /> com você e com a comunidade.
                </p>
            </article>
            <section className="justify-center grid md:grid-cols-2 gap-6 py-6 flex-wrap">
            <BoxGaleria src={img_loading} titulo="Mecanico realizando ajuste no motor" paragrafo="Ajuste finos em motor v6 com garantia de fábrica."/>
            <BoxGaleria src={img_loading} titulo="Troca de óleo em oficina especializada" paragrafo="Linha premium de lubrificantes homologados."/>
            <BoxGaleria src={img_loading} titulo="Sistema de freios sendo revisado" paragrafo="Revisão completa de freios com garantia estendida."/>
            <BoxGaleria src={img_loading} titulo="Equipa trabalhando em carros siltâneos" paragrafo="Boxes independentes para serviços simultâneos."/>

            </section>
        </section>
    )
}

export default Galeria