import { Heart, Coffee } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-4 flex w-full flex-col items-center gap-2 border-t border-border/50 pt-6 text-center">
      <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
        Hecho con <Heart className="h-3.5 w-3.5 fill-primary text-primary" /> y
        mucho <Coffee className="h-3.5 w-3.5 fill-primary text-primary" />
      </p>
      <p className="text-[10px] text-muted-foreground/70">{`© ${currentYear} Félix Pérez. Todos los derechos reservados.`}</p>
    </footer>
  );
}
