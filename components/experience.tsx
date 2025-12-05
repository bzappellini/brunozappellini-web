export default function Experience() {
  const categories = [
    {
      title: 'Infraestructura y Redes',
      items: [
        'Diseño y administración de redes críticas de gran escala',
        'Segmentación de redes, arquitectura DMZ y gestión de VPNs',
        'Experiencia con múltiples plataformas de equipamiento de red empresarial',
      ]
    },
    {
      title: 'DevOps / SRE',
      items: [
        'Pipelines CI/CD avanzados con control de versiones distribuido',
        'Orquestación de contenedores y GitOps en plataformas Kubernetes',
        'Infraestructura como código (IaC) con herramientas estándar de industria',
        'Automatización de procesos de despliegue y gestión de ciclo de vida',
        'Automatización de certificados y gestión de PKI',
      ]
    },
    {
      title: 'Servidores y Virtualización',
      items: [
        'Administración de clústeres de virtualización con alta disponibilidad',
        'Estrategias de migración y disaster recovery',
        'Gestión de almacenamiento empresarial de alto rendimiento',
        'Infraestructura de misión crítica y backup estratégico',
      ]
    },
    {
      title: 'Seguridad',
      items: [
        'Arquitectura AAA: autenticación, autorización y auditoría',
        'Federación de identidades y single sign-on (SSO)',
        'Estándares de seguridad: OAuth2, OIDC, SAML',
        'Hardening y base security en sistemas operativos',
        'Principios de seguridad en aplicaciones web',
      ]
    },
    {
      title: 'Docencia y Capacitación',
      items: [
        'Diseño e impartición de cursos técnicos en instituciones educativas',
        'Charlas y workshops en DevOps, automatización e infraestructura',
        'Desarrollo de materiales educativos de calidad',
      ]
    },
  ]

  return (
    <section id="experience" className="py-20 px-6 bg-secondary/20 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary-foreground">Experiencia Técnica</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, idx) => (
            <div key={idx} className="bg-card/50 rounded-lg p-6 border border-border hover:border-accent/50 transition-colors">
              <h3 className="text-lg font-semibold text-accent mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-3">
                    <span className="text-accent mt-1.5 flex-shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
