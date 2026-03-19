import { motion } from "framer-motion"
import { FaArrowRight } from "react-icons/fa"

export function HeroSection() {
    return (
        <section className="relative min-h-full flex items-center justify-center px-4 sm:px-6">

            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none" /> */}

            <article className="relative max-w-3xl mx-auto text-center">

                {/* Availability badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full ring-1 ring-foreground/[0.08]     bg-card/50 backdrop-blur-sm mb-6 sm:mb-8"
                >
                    <span className="text-[11px] sm:text-xs font-mono tracking-wide uppercase">
                        Disponível para projetos
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [.2, 0, 0, 1] }}
                    className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.1] mb-5 sm:mb-6"
                >
                    Desenvolvendo interfaces de{" "}
                    <span className="text-primary">alta performance</span>{" "}
                    com foco em precisão e usabilidade.
                </motion.h1>


                {/* Sub */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [.2, 0, 0, 1] }}
                    className="text-sm sm:text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto mb-8 sm:mb-10 px-2"
                >
                    Engenheiro Front-end especializado em React, TypeScript e Tailwind CSS.
                    Construo experiências digitais que combinam design e código de excelência.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [.2, 0, 0, 1] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
                >
                    <a
                        href="#projects"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20"
                    >
                        Ver Projetos
                    </a>
                    <a
                        href="#contact"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl ring-1 font-medium text-sm"
                    >
                        Discutir uma oportunidade
                    </a>
                </motion.div>
            </article>
            
        </section>
    )
}

