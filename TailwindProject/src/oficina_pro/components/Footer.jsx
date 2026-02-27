import { FaCopyright, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaSms } from "react-icons/fa";
import Logo from "./Logo";
import SocialMidias from "./SocialMidias";

function Footer() {
    return (
        <footer id="contacto" className="w-full max-w-6xl m-auto space-y-6 py-8 ">

            <div className="grid md:grid-cols-2 justify-between gap-6 px-6 py-6">
                <section className="w-full flex flex-col gap-4">
                    <Logo />
                    <div className="text-gray-300 text-sm flex flex-col gap-4">
                        <p>
                            Av. Fidel de Castro, - Morro bento, Luanda. <br /> Atendimento presencial de segunda a sábado, das 7h às 20h.
                        </p>
                        <p className="flex gap-4 items-center flex-wrap">
                            <SocialMidias icon={<FaPhone />} text="0800 123 4567" />
                            <SocialMidias icon={<FaSms />} text="contacto@oficinapro.com" />

                        </p>
                    </div>
                </section>
                <section className="w-full flex flex-col gap-4">
                    <h2 className="text-cyan-500 font-semibold text-lg uppercase">Acompanhe nossas dicas</h2>

                    <p className="flex flex-wrap gap-4 items-center text-gray-300 font-medium">
                        <SocialMidias icon={<FaInstagram />} text="Instagram" />
                        <SocialMidias icon={<FaFacebook />} text="Facebook" />
                        <SocialMidias icon={<FaLinkedin />} text="LinkedIn" />
                    </p>
                    <p className="text-sm">
                        Cadastra-se no painel do cliente para receber lembretes personalizados de manutenção e promoções exclusivas.
                    </p>
                </section>
            </div>

            <p className="flex items-center justify-between flex-col md:flex-row border-t border-t-gray-700 text-sm px-6 py-4 gap-3">
                <span className="flex items-center gap-1">
                    <FaCopyright className="font-light" />2026 Ofcina Pro. Todos os diretos Reservados.
                </span>
                <span className="flex items-center gap-4">
                    <span>Politica de privacidade</span>
                    <span>Termos de Uso</span>
                    <span>Mapa do site</span>
                </span>
            </p>
        </footer>
    )
}

export default Footer