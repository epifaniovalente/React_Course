import { FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-gray-900 text-center text-sm p-3 text-gray-400">
            <p className="flex items-center justify-evenly text-yellow-600 font-semibold">
                <FaFacebook className="text-xl text-gray-500 animate-spin hover:text-yellow-600 transition duration-300 cursor-pointer" />
                Nosso Rodape - Costs &copy 2026
                <FaInstagram className="text-xl text-gray-500 animate-pulse hover:text-yellow-600 transition duration-300 cursor-pointer" />
            </p>
        </footer>
    )
}

export default Footer;