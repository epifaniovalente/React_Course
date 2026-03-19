import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.2, 0, 0, 1];

// interface Tech {
//   name: string;
//   icon: string;
//   color: string;
// }

const techs =[
  { name: "HTML5", icon: "🌐", color: "hsl(14, 100%, 57%)" },
  { name: "CSS3", icon: "🎨", color: "hsl(210, 100%, 56%)" },
  { name: "JavaScript", icon: "⚡", color: "hsl(50, 100%, 50%)" },
  { name: "TypeScript", icon: "🔷", color: "hsl(211, 60%, 48%)" },
  { name: "React", icon: "⚛️", color: "hsl(193, 95%, 68%)" },
  { name: "Tailwind CSS", icon: "💨", color: "hsl(198, 93%, 60%)" },
  { name: "Git", icon: "🔀", color: "hsl(10, 75%, 50%)" },
  { name: "Figma", icon: "🖌️", color: "hsl(270, 60%, 55%)" }
]

export function TechSection() {

    return(
        <section className="py-24 sm:py-32 px-4 sm:px-6" ref={ref}>
            <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-12 sm:mb-16"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-widest mb-3 block">
            Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground">
            Tecnologias & ferramentas
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06, ease }}
              whileHover={{ scale: 1.03 }}
              className="group card-surface-hover rounded-2xl p-5 sm:p-6 flex flex-col items-center gap-3 cursor-default"
            >
              <span className="text-2xl sm:text-3xl grayscale group-hover:grayscale-0 transition-all duration-300">
                {tech.icon}
              </span>
              <span className="text-xs sm:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
        </section>
    )
}