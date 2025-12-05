export default function Projects() {
  const projects = [
    {
      title: 'Automatización de Certificados PKI',
      description: 'Sistema automatizado para generación y distribución de certificados en entornos híbridos on-premise y cloud, garantizando seguridad y conformidad.',
      tags: ['PKI', 'Automation', 'Security', 'IaC', 'Linux'],
    },
    {
      title: 'GitOps Multiplataforma',
      description: 'Implementación de estrategia GitOps para orquestación declarativa de aplicaciones en plataformas de contenedores, garantizando despliegues auditables y reproducibles.',
      tags: ['GitOps', 'Kubernetes', 'CI/CD', 'Automation', 'Infrastructure'],
    },
    {
      title: 'Plataforma de Monitoreo y Observabilidad',
      description: 'Sistema centralizado de observabilidad para infraestructura crítica de gran escala, incluyendo alerting inteligente y dashboards en tiempo real.',
      tags: ['Monitoring', 'Observability', 'Analytics', 'Infrastructure'],
    },
    {
      title: 'Gestión de Identidades y Acceso',
      description: 'Despliegue de plataforma IAM de clase empresarial con configuración avanzada de realms, políticas de seguridad y federación de identidades.',
      tags: ['IAM', 'SSO', 'Security', 'OAuth2', 'Architecture'],
    },
    {
      title: 'Migración de Infraestructura de Virtualización',
      description: 'Migración completa de infraestructura virtual hacia plataforma de código abierto, incluyendo estrategia de alta disponibilidad, disaster recovery y backups.',
      tags: ['Virtualization', 'Migration', 'HA', 'Infrastructure', 'Automation'],
    },
    {
      title: 'Programas Educativos: DevOps & Cloud Native',
      description: 'Diseño e impartición de cursos técnicos avanzados para instituciones educativas y profesionales, con enfoque práctico y aplicación real.',
      tags: ['Education', 'DevOps', 'Training', 'Cloud Native', 'Hands-on'],
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-primary border-t border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary-foreground">Proyectos Destacados</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10 group"
            >
              <h3 className="text-lg font-semibold text-primary-foreground mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="inline-block px-2 py-1 text-xs bg-secondary text-accent rounded border border-accent/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
