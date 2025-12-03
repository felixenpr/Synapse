import { Card } from "@/components/ui/card";
import { Github, Linkedin, FileText, Phone } from "lucide-react";

const links = [
  {
    name: "GitHub",
    description: "Proyectos, código y experimentos",
    url: "https://github.com/felixenpr",
    icon: Github
  },
  {
    name: "LinkedIn",
    description: "Perfil profesional y experiencia",
    url: "https://www.linkedin.com/in/felixenpr",
    icon: Linkedin
  },
  {
    name: "CV / Resume",
    description: "Ver o descargar mi CV",
    url: "/cv.pdf",
    icon: FileText
  },
  {
    name: "WhatsApp",
    description: "Contacto Directo",
    url: "https://wa.me/5491127831134",
    icon: Phone
  }
];

export default function PrimaryLinks() {
  return (
    <div className="flex w-full gap-3 flex-col md:flex-row md:justify-center md:gap-2">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="group flex items-center gap-4 border-border/50 bg-card p-4 transition-all hover:border-primary/50 hover:bg-card/80 hover:shadow-md hover:shadow-primary/10 md:gap-3 md:p-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground md:h-9 md:w-9 md:rounded-md">
                <Icon className="h-5 w-5 md:h-4 md:w-4" />
              </div>
              <div className="flex min-w-0 flex-col">
                <span className="truncate text-sm font-semibold text-foreground">
                  {link.name}
                </span>
                <span className="truncate text-xs text-muted-foreground md:hidden">
                  {link.description}
                </span>
              </div>
            </Card>
          </a>
        );
      })}
    </div>
  );
}
