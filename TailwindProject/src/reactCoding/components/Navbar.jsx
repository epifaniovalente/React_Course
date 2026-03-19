import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars } from "react-icons/fa";


export function Navbar() {
    const [open, setOpen] = useState(false)

    const links = [
        { href: "#about", label: "Sobre" },
        { href: "#about", label: "Projecto" },
        { href: "#about", label: "Contacto" }
    ]

    return (
        <motion.header
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .4, ease: [.2, 0, 0, 1] }}
            className="top-0 left-0 right-0 z-50 px-4 sm:px-3 py-3 sm:py-4 relative"
        >
            <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-2.5 rounded-2xl  backdrop-blur-xl ring-1">
                <a href="#"
                    className="text-sm font-semibold tracking-tight">
                    dev<span className="text-primary">.</span>portfolio
                </a>

                <div className="hidden sm:flex items-center gap-6">
                    {links.map((link) => (
                        <a href={link.href} key={link.href} className="text-xs font-medium duration-200 uppercase tracking-wider">
                            {link.label}
                        </a>
                    ))}
                </div>

                <button type="button" onClick={()=> setOpen(!open)} className="sm:hidden p-1.5 rounded-lg">
                    {open ? <span className="w-5 h-5">X</span> : <FaBars className="w-5 h-5" />}
                </button>

                {/* Mobile menu */}
                {open &&
                <motion.div
                initial={{opacity:0, y:-8}}
                animate={{opacity:1, y:0}}
                transition={{duration:.2}}
                className="sm:hidden max-w-5xl rounded-2xl bg-blue-900 text-blue-300 backdrop-blur-xl ring-1  p-4 flex flex-col gap-3 absolute right-0 left-0 top-16">
                    {links.map((link)=>(
                        <a href={link.href} key={link.href} className="text-sm font-medium py-2 px-3 rounded-xl hover:bg-card/50">
                            {link.label}
                        </a>
                    ))}

                </motion.div>
                    
                }

            </nav>

        </motion.header>
    )
}