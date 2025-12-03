import { Card, CardContent } from "@/components/ui/card";
import {
  Workflow,
  Users,
  Target,
  Compass,
  BookOpen,
  Layout
} from "lucide-react";

const highlights = [
  { icon: Workflow, title: "Agile", description: "Scrum & Kanban" },

  {
    icon: Users,
    title: "Coordinación",
    description: "flujo claro con clientes"
  },

  {
    icon: Target,
    title: "Enfoque",
    description: "soluciones orientadas a resultados"
  },

  {
    icon: Compass,
    title: "Product Thinking",
    description: "visión completa del proyecto"
  },

  { icon: BookOpen, title: "Autodidacta", description: "aprendizaje continuo" },
  {
    icon: Layout,
    title: "UX/UI",
    description: "enfoque centrado en el usuario"
  }
];

export default function AboutSection() {
  return (
    <section className="w-full">
      <h2 className="mb-4 text-center text-base font-semibold text-foreground sm:text-lg">
        Detrás del Código
      </h2>
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardContent className="p-5 sm:p-6">
          <p className="text-center text-sm leading-relaxed text-muted-foreground text-balance">
            Me enfoco en construir productos claros, funcionales y pensados para
            las personas. Durante los últimos años he trabajado como freelancer
            desarrollando soluciones para ecommerce y startups, aprendiendo a
            traducir objetivos de negocio en experiencias fluidas y bien
            estructuradas. Disfruto trabajar con metodologías ágiles, mantener
            una comunicación abierta con clientes y elevar cada proyecto con una
            visión completa del producto. Mi compromiso es siempre entregar
            soluciones que generen impacto real y estén diseñadas para escalar.
          </p>
          <div className="mt-5 grid grid-cols-3 gap-4">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold text-foreground sm:text-sm">
                    {item.title}
                  </span>
                  <span className="text-[10px] text-muted-foreground sm:text-xs">
                    {item.description}
                  </span>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
