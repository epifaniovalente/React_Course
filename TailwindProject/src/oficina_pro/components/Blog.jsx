import { FaBlog } from "react-icons/fa"
import BoxBlog from "./BoxBlog"

function Blog() {
    return (
        <section id="blog" className="w-full max-w-6xl m-auto p-6">
            <p className="text-cyan-400 uppercase font-semibold text-xs flex items-center gap-2 mb-4"><FaBlog/> Blog Oficina pro</p>
            <div>
                <article className="flex flex-col gap-2.5">
                    <h2 className="text-3xl text-gray-50 font-bold">
                        Conteúdo que ajuda você a cuidar melhor do seu veículo
                    </h2>
                    <p className="text-gray-300">
                        Dicas, tutoriais e análises técnicas produzidas pela nossa equipe para manter a sua frota ou <br /> carro pessoal sempre na melhor forma
                    </p>
                </article>
                <section className="grid md:grid-cols-3 justify-center gap-6 py-6 flex-wrap">
                    <BoxBlog 
                    subtitulo="6 min de leitura"
                    titulo="5 sinais de que chegou a hora de revisar os freios"
                    paragrafo=" Ruídos metalicos e pedal mais duro podem indicar desgastes prematuro. Entenda como identificar antes que vire urgência."
                    link="Ler Artigo completo"
                    />
                    <BoxBlog 
                    subtitulo="8 min de leitura" 
                    titulo="Checklist de viagem: o que verificar antes de estrada" 
                    paragrafo="Pneus calibrados, fluidos no nível e baeteria testada são só o começo. Veja o checklist completo da Oficina Pro."
                    link="Ler Artigo completo"
                    />
                    <BoxBlog 
                    subtitulo="5 min de leitura" 
                    titulo="Como a manutenção preventiva economiza até 20% no ano" 
                    paragrafo="Compartilhamos dados reais de clientes que adoptaram planos personalizados e reduziram custos com imprevistos."
                    link="Ler Artigo completo"
                    />
                </section>
            </div>
        </section>
    )
}

export default Blog