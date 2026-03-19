import { motion } from "framer-motion";

export function NavBar() {
    return (
        <nav className="fixed top-0 w-full bg-white shadow-md z-50">
            <ul className="flex justify-center gap-6 p-4">
                <li>
                    <a href="#home" className="hover:text-blue-500 transition ease-in-out duration-300">Home</a>
                </li>
                <li>
                    <a href="#sobre" className="hover:text-blue-500 transition ease-in-out duration-300">Sobre</a>
                </li>
                <li>
                    <a href="#cursos" className="hover:text-blue-500 transition ease-in-out duration-300">Cursos</a>
                </li>
            </ul>
        </nav>
    )
}

export function Section({ id, titulo, color }) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: .8 }}
            className={`h-screen bg-gray-400 flex items-center justify-center ${color}`}
        >
            <h2 className="text-3xl font-bold">{titulo}</h2>

        </motion.section>
    )
}

export default function Rolagem() {
    return (
        <main>
            <NavBar />
            <Section id="home" titulo="Seja bem vindo a minha Single Page."/>
            <Section id="sobre" titulo="Sobre Mim..."/>
            <Section id="cursos" titulo="Meus Cursos"/>
        </main>
    )
}