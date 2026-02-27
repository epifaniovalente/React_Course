import { FaCalendarCheck } from "react-icons/fa"
import FormAgendamento from "./FormAgendamento"

function Agendamento_Online() {
    return (
        <div className="w-full max-w-6xl m-auto px-3">
            <section id="agendamento" className="w-full px-6 py-6 bg-slate-800/30 rounded-xl border border-gray-800/50">
                <p className="text-yellow-400 uppercase font-semibold text-xs flex items-center gap-2 mb-4">
                    <FaCalendarCheck /> Agendamento Online
                </p>

                <article className="flex flex-col gap-2.5">
                    <h2 className="text-3xl text-gray-50 font-bold">
                        Escolha o horário perfeito em segundos
                    </h2>
                    <p className="text-gray-300">
                        Nossa agenda digital confirma a disponibilidade em tempo real e envia notificações automáticas por e-mail e whatsApp para você não perder nenhum compromisso.
                    </p>
                    <ul className="text-sm list-disc list-inside text-gray-400 space-y-2">
                        <li>
                            Actualizações instantâneas sobre o status do serviço.
                        </li>
                        <li>
                            Histórico sincronizado com sua conta de cliente.
                        </li>
                        <li>
                            Pagamentos a aprovação de orçamento pelo telemóvel.
                        </li>
                    </ul>
                </article>

                <FormAgendamento/>

            </section>
        </div>
    )
}

export default Agendamento_Online