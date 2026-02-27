import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
function Navbar() {
    return (
        <nav className="bg-blue-700 p-2.5 text-white font-medium flex items-center gap-4">
            <Link to="/">Home</Link>
            <Link to="/empresa">Empresa</Link>
            <Link to="/contacto">Contacto</Link>
        </nav>

    )
}

export default Navbar