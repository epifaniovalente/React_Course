import { FaClock, FaPhoneAlt} from "react-icons/fa";
import Botao from "./Botao";
import TextSmall from "./TextSmall";
import Paragrafo from "./Paragrafo";
import Header from "./Header";
import Image from "./Image";
import mecanico from "../image/mecanico_freio.jpg"
import BoxHome from "./BoxHome";

function Home() {
    return (
        <section className="w-full max-w-6xl m-auto">
            <Header/>
            <main className="w-full max-w-6xl m-auto p-6">

            <p className="w-fit text-cyan-400 bg-cyan-500/10 p-1 px-2 rounded-2xl border border-cyan-300/50 uppercase font-semibold text-xs flex items-center gap-2 mb-4">
                <FaClock/> Manutenção inteligente
            </p>

            <article className="flex flex-col gap-5">
                <h2 className="md:text-4xl text-2xl text-gray-50 font-bold">
                    Tecnologia e confiança para manter seu <br /> carro sempre pronto
                </h2>
                <p className="text-gray-400">
                   A oficina pro oferece serviços de manutenção agendamento online e<br /> acompanhamento completo do historico cliente em um único painel.
                </p>

                <div className="flex items-center gap-4">
                   
                    <Botao type="button" text="Agendar atendimento" color="text-slate-800" background="bg-yellow-500" width="w-fit"/>

                    <a href="tel:+244923000000" className="flex items-center gap-2">
                        <FaPhoneAlt className="text-cyan-300"/>
                        <p>
                            <Paragrafo text="central 24/7" color="text-gray-50" weight="font-medium"/>
                            <TextSmall text="923 000 000"color="text-gray-400"/>
                        </p>
                    </a>
                </div>

                <section className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-2.5">
                    <BoxHome texto="clientes fidelizados" numero="+1200"/>
                    <BoxHome texto="Média de avaliação" numero="4.5/5"/>
                    <BoxHome texto="Serviços concluídos" numero="18.500"/>
                </section>

                <div className="md:max-w-3/4 w-full border border-gray-800/50 rounded-2xl relative overflow-hidden shadow-2xl shadow-cyan-900/20 mt-6 tracking-wide">
                <Image img={mecanico}/>
                    <p className="absolute h-fit bottom-0 left-0 right-0 z-10 bg-slate-950/80 p-3">
                        <Paragrafo text="Monitoramento em tempo real" tipoLetra="uppercase" color="text-cyan-500"/>
                        <TextSmall text="Acompanhe status, fotos e aprovação de serviços direto do celular." color="text-gray-400"/>
                    </p>
                </div>
            </article>
            </main>
        </section>
    )
}

export default Home