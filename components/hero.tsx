import Image from 'next/image'
import { Download, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Network Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary" />
      </div>

      <div className="relative z-10 max-w-4xl w-full mx-auto text-center">
        {/* Avatar */}
        <div className="relative w-40 h-40 mx-auto mb-8 rounded-full border-4 border-accent/20 shadow-[0_0_30px_rgba(var(--accent),0.3)] overflow-hidden">
          <Image
            src="/avatar.png"
            alt="Bruno Damián Zappellini"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-primary-foreground text-balance tracking-tight">
          Bruno Damián Zappellini
        </h1>

        {/* Role */}
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-sm">
          <p className="text-lg md:text-xl text-accent font-mono">
            DevOps / SRE • Network & Security Specialist
          </p>
        </div>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Automatización, infraestructura escalable, redes de misión crítica y formación académica.
          Diseñando el futuro de la infraestructura distribuida.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/cv.pdf"
            download="CV_Bruno_Zappellini.pdf"
            className="group px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-md hover:bg-accent/90 transition-all flex items-center gap-2 shadow-lg shadow-accent/20"
          >
            <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            Descargar CV
          </a>

          <div className="flex gap-4">
            <a
              href="mailto:bruno.zappellini@gmail.com"
              className="p-3 border border-border bg-background/50 backdrop-blur-sm text-foreground hover:text-accent hover:border-accent transition-colors rounded-md"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/bruno-zappellini-9b303613/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border bg-background/50 backdrop-blur-sm text-foreground hover:text-accent hover:border-accent transition-colors rounded-md"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/bzappellini"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-border bg-background/50 backdrop-blur-sm text-foreground hover:text-accent hover:border-accent transition-colors rounded-md"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
