import { motion } from "framer-motion";
export default function Animacao() {

    const aparecer = {
        escondido: { opacity: 0, y: 20 },
        visivel: { opacity: 1, y: 0 }
    };

    return (
        <motion.section
        initial={{opacity:0,x:-100}}
        animate={{opacity:1,x:0}}
        transition={{duration:.3}}
         className="text-gray-100 w-fit p-5 rounded-lg border border-emerald-200 m-auto">

        <p>
            Lorem ipsum dolor sit amet cosectetur adipisicing elit. Doloribus eum labore nostrum molestias voluptatibus neque, ea consequuntur! Veritatis nisi impedit facilis incidunt vero cupiditate autem.</p>
        <motion.button
        whileHover={{scale:1.1}}
        whileTap={{scale:.9}}
         className="bg-emerald-500 rounded-xl text-center cursor-pointer w-fit p-2">
            clica
        </motion.button>

        </motion.section>
    )
}