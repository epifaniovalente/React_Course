import { motion, useInView } from "framer-motion";
import { useRef, useState, MouseEvent } from "react";
const ease = [0.2, 0, 0, 1];

const projects= [
  {
    title: "Plataforma SaaS",
    description: "Dashboard complexo com visualização de dados em tempo real, autenticação e gestão de permissões.",
    tags: ["React", "TypeScript", "Tailwind", "Recharts"],
    year: "2024",
    image: projectSaas,
  },
  {
    title: "E-commerce Headless",
    description: "Loja online de alta performance com SSR, busca instantânea e checkout otimizado para conversão.",
    tags: ["React", "REST API", "Tailwind"],
    year: "2024",
    image: projectEcommerce,
  },
  {
    title: "Design System",
    description: "Biblioteca de componentes acessíveis e documentados com Storybook, cobrindo 40+ componentes reutilizáveis.",
    tags: ["React", "TypeScript", "CSS"],
    year: "2023",
    image: projectDesignSystem,
  },
  {
    title: "App de Produtividade",
    description: "Aplicação de gestão de tarefas com drag-and-drop, filtros avançados e sincronização em tempo real.",
    tags: ["React", "JavaScript", "Tailwind"],
    year: "2023",
    image: projectProductivity,
  },
];

function ProjectCard() {
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease }}
            whileHover={{ y: -4 }}
            onMouseMove={handleMouse}
            className="spotlight-card group relative rounded-2xl bg-card p-1 ring-1 ring-foreground/[0.08] shadow-2xl transition-shadow duration-300 hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_8px_32px_rgba(0,0,0,0.25)]">

            <div className="relative overflow-hidden rounded-[12px] bg-background">
                {/* Project image */}
                <div className="relative overflow-hidden h-40 sm:h-48">
                    <img
                        src={project.image}
                        alt={`Screenshot do projeto ${project.title}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>

                <div className="p-5 sm:p-6">
                    <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg sm:text-xl font-medium text-foreground">{project.title}</h3>
                        <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest shrink-0 ml-3">
                            {project.year}
                        </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                        {project.description}
                    </p>

                    <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1.5">
                            {project.tags.map((tag) => (
                                <span key={tag} className="tag-pill">{tag}</span>
                            ))}
                        </div>

                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {project.github && (
                                <a href={project.github} className="p-2 rounded-lg hover:bg-card transition-colors">
                                    <Github className="w-4 h-4 text-muted-foreground" />
                                </a>
                            )}
                            {project.link && (
                                <a href={project.link} className="p-2 rounded-lg hover:bg-card transition-colors">
                                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export function ProjectSection() {
    return (
        <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6" ref={ref}>
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease }}
                    className="mb-12 sm:mb-16"
                >
                    <span className="text-xs font-mono text-primary uppercase tracking-widest mb-3 block">
                        Projetos
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground">
                        Trabalhos selecionados
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}