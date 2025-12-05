export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-primary border-t border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary-foreground">Sobre Mí</h2>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Licenciado en Informática (2009) con <span className="text-primary-foreground font-semibold">20 años de experiencia</span> (desde 2005) en infraestructura y redes. Actualmente desempeño el rol de <span className="text-primary-foreground font-semibold">Jefe de Redes</span> en el Poder Judicial de Chubut, administrando una red provincial con ~3000 activos distribuidos en múltiples datacenters (Rawson, Esquel, Trelew, Comodoro, Madryn, Sarmiento, Lago Puelo), interconectados vía MPLS.
          </p>

          <p>
            Mi carrera se centra en la <span className="text-primary-foreground font-semibold">automatización</span> como pilar fundamental. Cuento con experiencia práctica en Ansible, Docker, Kubernetes, GitLab/ArgoCD, Proxmox, IBM FlashSystem 5000, almacenamiento DRAID6, VLANs, DMZ, segmentación, monitoreo y hardening de infraestructuras complejas.
          </p>

          <p>
            Apasionado por documentar, optimizar y escalar infraestructura, tengo una vocación genuina por <span className="text-primary-foreground font-semibold">compartir conocimiento</span>. Actualmente soy profesor adjunto universitario en UNPSJB, enseñando materias como Administración de Redes y Seguridad, Redes y Transmisión de Datos, y cursos especializados en DevOps y GitOps.
          </p>

          <p className="italic text-muted-foreground">
            Mis valores: automatizar todo lo que pueda, claridad en la comunicación, eficiencia operacional, profesionalismo y multiplicación del conocimiento a través de la educación. <span className="text-primary-foreground font-semibold">Pero mi verdadera pasión y motor es mi familia.</span>
          </p>
        </div>
      </div>
    </section >
  )
}
