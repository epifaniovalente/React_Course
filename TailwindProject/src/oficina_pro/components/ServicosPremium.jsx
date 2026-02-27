import { FaCalendarCheck, FaCheckSquare, FaClock, FaTools, FaUsers } from "react-icons/fa"

import BoxPremium from "./BoxPremium"

function ServicosPremium() {
    return(
         <section id="servicos" className="w-full max-w-6xl m-auto p-6">
                    <p className="text-cyan-400 uppercase font-semibold text-xs flex items-center gap-2 mb-4">
                        <FaUsers/> serviços premium
                    </p>
        
                    <article className="flex flex-col gap-2.5">
                        <h2 className="text-3xl text-gray-50 font-bold">
                            Tudo o que seu carro precisa em um só lugar
                        </h2>
                        <p className="text-gray-300">
                            Processos padronizados, peças originais e relatorios diggitais para você ter total transparência <br /> sobre cada etapa do serviço.
                        </p>
                    </article>

                    <article className="justify-center grid md:grid-cols-2 gap-6 mt-6">
                        <BoxPremium icon={<FaCalendarCheck/>}tipoServico="Agendamento expresso" descricao="Sem filas na recepção" conteudo="Reserve o melhor horario e receba actualizações em tempo real pelo WhatsApp durante todo serviço."/>

                        <BoxPremium icon={<FaClock/>}tipoServico="Plano de manutenção" descricao="Economia média de 18%" conteudo="Histórico completo e alertas personalizadaos para cada veiculo da sua frota ou garagem pessoal."/>

                        <BoxPremium icon={<FaCheckSquare/>}tipoServico="Diagnóstico computadorizado" descricao="Prazo medio de 24h" conteudo="Checklist eletrônico com mais de 60 itens para garantir que o veiculo esteja pronto para qualquer viagem."/>

                        <BoxPremium icon={<FaTools/>}tipoServico="Diagnóstico computadorizado" descricao="Relatório enviado por email" conteudo="Leitura avançada de falhas com scanner homologado para as principais montadoras do mercado."/>


                    </article>
        </section>
    )
}

export default ServicosPremium