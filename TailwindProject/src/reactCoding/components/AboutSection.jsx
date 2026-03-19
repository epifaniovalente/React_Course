import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { profilePhoto } from "../image/profile_round.png";

const experience = [
    {
        role: "Front-end Developer Senior",
        company: "TechCorp",
        period: "2023 — Presente",
        description: "Liderança técnica no desenvolvimento de interfaces complexas com React e TypeScript."
    },
    {
        role: "Front-end Developer",
        company: "DigitalAgency",
        period: "2021 — 2023",
        description: "Desenvolvimento de aplicações web responsivas e sistemas de design reutilizáveis.",
    },
    {
        role: "Desenvolvedor Web Jr.",
        company: "StartupXYZ",
        period: "2019 — 2021",
        description: "Construção de landing pages e interfaces com HTML, CSS e JavaScript.",
    },
]

export function AboutSection() {

    return (
        <section id="about" className="py-24 sm:py-32 px-4 sm:px-6" ref={ref}>

            <article >
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease }}
                    className="mb-12 sm:mb-16">
                    <span className="text-xs font-mono text-primary uppercase tracking-widest mb-3 block">
                        Sobre Mim
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground">
                        Quem sou eu
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Photo + Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1, ease }}
                        className="lg:col-span-2 flex flex-col items-center lg:items-start gap-6"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/5 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <img
                                src={profilePhoto}
                                alt="Foto de perfil do desenvolvedor"
                                className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl object-cover ring-1 ring-foreground/[0.08]"
                                loading="lazy"
                            />
                        </div>

                        <div className="text-center lg:text-left">
                            <h3 className="text-xl font-medium text-foreground mb-1">João Silva</h3>
                            <p className="text-sm text-primary font-mono mb-3">Front-end Developer</p>
                            <div className="flex items-center justify-center lg:justify-start gap-1.5 text-muted-foreground">
                                <MapPin className="w-3.5 h-3.5" />
                                <span className="text-xs">Lisboa, Portugal</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bio + Experience */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2, ease }}
                        className="lg:col-span-3 space-y-8"
                    >
                        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                            Sou um desenvolvedor front-end apaixonado por criar interfaces bonitas, acessíveis e de alta performance.
                            Com mais de 4 anos de experiência, especializo-me em transformar designs complexos em código limpo
                            e escalável usando React, TypeScript e Tailwind CSS. Acredito que um bom produto digital
                            nasce da fusão entre design impecável e engenharia rigorosa.
                        </p>

                        {/* Experience timeline */}
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <Briefcase className="w-4 h-4 text-primary" />
                                <h4 className="text-sm font-medium text-foreground uppercase tracking-wider">Experiência</h4>
                            </div>

                            <div className="space-y-1">
                                {experience.map((exp, i) => (
                                    <motion.div
                                        key={exp.company}
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={inView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease }}
                                        className="group relative pl-6 pb-6 border-l border-foreground/[0.08] last:pb-0"
                                    >
                                        <div className="absolute left-0 top-1.5 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-card ring-2 ring-primary/40 group-hover:ring-primary transition-colors duration-300" />
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1.5">
                                            <h5 className="text-sm font-medium text-foreground">{exp.role}</h5>
                                            <span className="text-[11px] font-mono text-muted-foreground tracking-wider">{exp.period}</span>
                                        </div>
                                        <p className="text-xs text-primary/80 font-medium mb-1">{exp.company}</p>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Education */}
                        <div className="flex items-center gap-3 p-4 rounded-xl card-surface">
                            <GraduationCap className="w-5 h-5 text-primary shrink-0" />
                            <div>
                                <p className="text-sm font-medium text-foreground">Licenciatura em Engenharia Informática</p>
                                <p className="text-xs text-muted-foreground">Universidade de Lisboa — 2019</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </article>


        </section>
    )
}