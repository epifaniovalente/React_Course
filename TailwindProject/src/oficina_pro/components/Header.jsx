import { FaBars, FaTools } from "react-icons/fa";
import Navbar from "./Navbar";
import Botao from "./Botao";

function Header() {
    return (
        <header className="border-b-2 border-gray-800/50 flex justify-between items-center py-2 px-4">
            {/*fixed w-full top-0 backdrop:blur-2xl z-50 bg-slate-900/70*/}
            <div className="flex items-center gap-2">
                <span className="bg-cyan-400/15 p-2.5 rounded-xl text-center text-xl font-bold text-cyan-400">
                    <FaTools/>
                </span>
                <a href="#" className="font-medium text-gray-200">
                    Oficina AutoStar
                </a>
            </div>

            <Navbar/>

            <Botao text={<FaBars/>} width={`text-xl`} color={`text-cyan-600`} display={`md:hidden`}/>

        </header>
    )
}

export default Header