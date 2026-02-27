import { Link } from "react-router-dom";

import logo from '../../image/costs_logo.png'

function NavBar() {
    return(
        <nav className="bg-black">
        <div className="max-w-7xl m-auto flex justify-between p-4"> 
            <Link to="/">
            <img src={logo} alt="" />
            </Link>
            <ul className="flex gap-4 items-center font-medium">
                <li className="text-white hover:text-yellow-500 transition duration-300 ease-in-out"><Link to="/">Home</Link></li>
                <li className="text-white hover:text-yellow-500 transition duration-300 ease-in-out"><Link to="/project">Projects</Link></li>
                <li className="text-white hover:text-yellow-500 transition duration-300 ease-in-out"><Link to="/contact">Contact</Link></li>
                <li className="text-white hover:text-yellow-500 transition duration-300 ease-in-out"><Link to="/company">Company</Link></li>
            </ul>
        </div>
        </nav>
    )

}

export default NavBar