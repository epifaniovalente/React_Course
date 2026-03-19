import { FaUsers } from "react-icons/fa"
import BoxInsights from "./BoxInsights"

function Historico_cliente() {
    return (
        <section id="clientes" className="w-full max-w-6xl m-auto p-6">
            <p className="text-cyan-400 uppercase font-semibold text-xs flex items-center gap-2 mb-4">
                <FaUsers/> Gestão de Cliente
            </p>

            <article className="flex flex-col gap-2.5">
                <h2 className="text-3xl text-gray-50 font-bold">
                    Histórico completo e insights inteligentes
                </h2>
                <p className="text-gray-300">
                    Dashboards personalizados reúnem o histórico de cada veículo, notificações automáticas e <br /> recomendações de manutenção preventiva.
                </p>
            </article>

            <section className="grid gap-6 mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <BoxInsights userName="Lukenia de Abreu" marcaCarro="Hyundai Santafé 2024" quntServico=" 7 serviços" descricao="Recomendado retornar em 5.000 km para troca de fluídos." dataRealizada="10/1/2025" tipoServico="Alinhamento e balanceamento"statusServico="concluido" dataAtendimento="50/20/2006"/>

                <BoxInsights userName="Josias José" marcaCarro="Mitsubishi Fortuner" quntServico=" 11 serviços" descricao="Recomendado retornar em 5.000 km para troca de fluídos." dataRealizada="28/09/2025" tipoServico="Diagnóstico eletrônico completo" statusServico="concluido" dataAtendimento="50/20/2006"/>

                <BoxInsights userName="Osvaldo Camuiaca" marcaCarro="Toyota Lexus V8 TwinTurbo 2025" quntServico="5 serviços" descricao="Recomendado retornar em 5.000 km para troca de fluídos." dataRealizada="04/01/2026" tipoServico="Troca de óleo e filtros." statusServico="concluido" dataAtendimento="50/20/2006"/>

            </section>

        </section>
    )
}

export default Historico_cliente