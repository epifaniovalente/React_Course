export function ContactSection() {
    return (
        <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6" ref={ref}>
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease }}
                    className="text-center mb-12"
                >
                    <span className="text-xs font-mono text-primary uppercase tracking-widest mb-3 block">
                        Contato
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-4">
                        Vamos trabalhar juntos?
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base max-w-lg mx-auto">
                        Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades
                        para fazer parte da sua equipe.
                    </p>
                </motion.div>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.15, ease }}
                    className="card-surface rounded-2xl p-6 sm:p-8 space-y-5 mb-8"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                            <label htmlFor="name" className="text-xs font-medium text-foreground uppercase tracking-wider">
                                Nome
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={form.name}
                                onChange={handleChange}
                                maxLength={100}
                                placeholder="O teu nome"
                                className={`w-full px-4 py-3 rounded-xl bg-background ring-1 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:ring-primary/50 ${errors.name ? "ring-destructive/50" : "ring-foreground/[0.08]"
                                    }`}
                            />
                            {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                        </div>

                        <div className="space-y-1.5">
                            <label htmlFor="email" className="text-xs font-medium text-foreground uppercase tracking-wider">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                maxLength={255}
                                placeholder="email@exemplo.com"
                                className={`w-full px-4 py-3 rounded-xl bg-background ring-1 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:ring-primary/50 ${errors.email ? "ring-destructive/50" : "ring-foreground/[0.08]"
                                    }`}
                            />
                            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label htmlFor="message" className="text-xs font-medium text-foreground uppercase tracking-wider">
                            Mensagem
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            maxLength={1000}
                            rows={5}
                            placeholder="Descreve o teu projeto ou ideia..."
                            className={`w-full px-4 py-3 rounded-xl bg-background ring-1 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all duration-200 focus:ring-primary/50 resize-none ${errors.message ? "ring-destructive/50" : "ring-foreground/[0.08]"
                                }`}
                        />
                        {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
                        <p className="text-[11px] text-muted-foreground/60 text-right">{form.message.length}/1000</p>
                    </div>

                    <button
                        type="submit"
                        disabled={sending}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 disabled:opacity-70 disabled:hover:scale-100"
                    >
                        {sending ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                        ) : sent ? (
                            <CheckCircle className="w-4 h-4" />
                        ) : (
                            <Send className="w-4 h-4" />
                        )}
                        {sending ? "A enviar..." : sent ? "Enviado!" : "Enviar Mensagem"}
                    </button>
                </motion.form>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3, ease }}
                    className="flex items-center justify-center gap-4"
                >
                    <a
                        href="mailto:hello@example.com"
                        className="p-3 rounded-xl ring-1 ring-foreground/[0.1] text-muted-foreground hover:text-foreground hover:ring-foreground/[0.2] transition-all duration-200"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl ring-1 ring-foreground/[0.1] text-muted-foreground hover:text-foreground hover:ring-foreground/[0.2] transition-all duration-200"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl ring-1 ring-foreground/[0.1] text-muted-foreground hover:text-foreground hover:ring-foreground/[0.2] transition-all duration-200"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    )

}