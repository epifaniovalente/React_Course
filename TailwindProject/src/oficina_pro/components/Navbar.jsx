function Navbar() {
    return (
        <nav className="hidden md:flex items-center gap-4 ">
            <a href="#servicos" className="text-gray-300 font-medium hover:text-cyan-500 transition duration-300 ease-in-out">
                Serviços
            </a>
            <a href="#agendamento" className="text-gray-300 font-medium hover:text-cyan-500 transition duration-300 ease-in-out">
                Agendamento
            </a>
            <a href="#clientes" className="text-gray-300 font-medium hover:text-cyan-500 transition duration-300 ease-in-out">
                Clientes
            </a>
            <a href="#galeria" className="text-gray-300 font-medium hover:text-cyan-500 transition duration-300 ease-in-out">
                Galeria
            </a>
            <a href="#blog" className="text-gray-300 font-medium hover:text-cyan-500 transition duration-300 ease-in-out">
                Blog
            </a>
            <a href="#contacto" className="text-gray-300 font-medium hover:text-cyan-500 transition duration-300 ease-in-out">
                Contacto
            </a>
        </nav>
    )
}

export default Navbar