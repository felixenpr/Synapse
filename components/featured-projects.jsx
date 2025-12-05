import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Juego NFT Post-Apocalíptico Play-to-Earn en WAX",
    description:
      "Aprendí a integrar APIs blockchain, manejar economía interna del juego y optimizar interfaces gamificadas. Trabajé flujos complejos de usuario, sincronización de datos y lógica de recompensas.",
    image: "/extinctionwars-preview.jpg",
    url: "https://extintionwars.felixenpr.site",
    tags: ["Web3", "WAX", "GameDev", "NFT", "UI Gamificada"]
  },
  {
    title: "Juego NFT de Gestión y Producción en la Red WAX",
    description:
      "Fortalecí el entendimiento de mecánicas Play-to-Earn, ciclos de producción, dashboards gamificados y consumo de APIs en Web3. Aprendí a optimizar rendimiento en interfaces que requieren actualizaciones constantes.",
    image: "/ai-dashboard-interface.png",
    url: "https://mygoldfarm.felixenpr.site",
    tags: ["Web3", "WAX", "GameDev", "NFT", "State Management"]
  },
  {
    title: "Sistema de Gestión de Expensas para Condominios",
    description:
      "Aprendí a estructurar un dashboard complejo, manejar flujos de usuarios, optimizar rendimiento y trabajar módulos escalables con enfoque en UX. Implementé lógica de negocio clara, componentes reutilizables y buenas prácticas de arquitectura frontend.",
    image: "/habigestor.webp",
    url: "https://habigestor.felixenpr.site",
    tags: [
      "React",
      "Next.js",
      "SWR",
      "API REST",
      "Dashboard UI",
      "Component Architecture"
    ]
  },
  {
    title: "Gestor de URLs Dinámicas con QR y Analíticas",
    description:
      "Aprendí a implementar redirecciones dinámicas, métricas de acceso y manejo de datos para análisis. Profundicé en rutas dinámicas, buenas prácticas de rendimiento y diseño de interfaces simples para flujos rápidos de creación y gestión.",
    image: "/mobile-app-ui-design.png",
    url: "https://qrnexus.felixenpr.site",
    tags: [
      "Next.js",
      "API Routes",
      "Analytics",
      "QR Generation",
      "State Management",
      "UX"
    ]
  },
  {
    title: "WebApp Link-in-Bio y Portafolio Personal",
    description:
      "Mejoré mis habilidades en UI/UX minimalista, manejo de layouts reutilizables y optimización para SEO. Aprendí a construir componentes altamente reutilizables y a mejorar la experiencia móvil con un diseño limpio y rápido.",
    image: "/synapse-preview.jpg",
    url: "https://synapse.felixenpr.site",
    tags: ["React", "Next.js", "UI/UX", "SEO", "Responsive Design"]
  },
  {
    title: "Configurador de PCs Personalizadas para Ecommerce",
    description:
      "Aprendí a manejar lógica condicional compleja entre componentes, mejorar UX en procesos de selección y optimizar validaciones según reglas de negocio. Fue clave para reforzar patrones de estado y arquitectura limpia.",
    image: "/ai-dashboard-interface.png",
    url: "https://builderpc.felixenpr.site",
    tags: [
      "React",
      "Ecommerce UI",
      "Component Logic",
      "Forms",
      "State Management"
    ]
  }
];

export default function FeaturedProjects() {
  return (
    <section className="w-full">
      <h2 className="mb-4 text-center text-base font-semibold text-foreground sm:text-lg">
        Desarrollos Recientes
      </h2>
      <div className="grid grid-cols-1 gap-3">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="group h-full overflow-hidden border-border/50 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <div className="relative h-32 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  style={{ objectPosition: "top" }}
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card to-transparent" />
                <div className="absolute right-2 top-2 rounded-full bg-background/80 p-1.5 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  <ExternalLink className="h-3.5 w-3.5 text-primary" />
                </div>
              </div>
              <CardContent className="p-3">
                <h3 className="text-sm font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-primary/10 px-2 py-0.5 text-xs text-primary hover:bg-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
