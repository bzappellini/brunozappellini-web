export default function Philosophy() {
  return (
    <section className="py-20 px-6 bg-secondary/20 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary-foreground">Filosofía</h2>
        
        <div className="bg-card/50 border border-accent/20 rounded-lg p-8 md:p-12">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              <span className="text-accent font-semibold">"Automatizar todo lo que pueda"</span> es mi lema. Creo que la automatización es el pilar fundamental de cualquier infraestructura moderna y escalable.
            </p>

            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-accent flex-shrink-0">→</span>
                <span><span className="text-primary-foreground font-semibold">Infraestructura como Código:</span> Toda mi infraestructura está versionada, reproducible y auditable.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent flex-shrink-0">→</span>
                <span><span className="text-primary-foreground font-semibold">Redes Seguras y Estables:</span> Diseño defensivo en profundidad, documentación exhaustiva y monitoreo proactivo.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent flex-shrink-0">→</span>
                <span><span className="text-primary-foreground font-semibold">Enseñanza como Multiplicador:</span> Educar es mi forma de multiplicar el conocimiento y impacto profesional.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent flex-shrink-0">→</span>
                <span><span className="text-primary-foreground font-semibold">Pasión por la Excelencia:</span> Trabajo bien hecho, tecnología de punta, y dedicación a la familia y profesión.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
