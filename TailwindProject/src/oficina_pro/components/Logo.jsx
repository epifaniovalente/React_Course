import { FaTools } from "react-icons/fa";
function Logo() {
    return (
        <article className="flex items-center gap-2">
            <FaTools className="text-2xl text-cyan-400" />
            <div className="flex flex-col">
                <p className="text-gray-300 font-semibold text-xl">Oficina Pro</p>
                <span className="text-gray-400 text-sm">Perfomance e confiança para quem vive na estrada.</span>
            </div>
        </article>
    )
}

export default Logo