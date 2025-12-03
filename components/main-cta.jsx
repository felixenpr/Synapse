import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function MainCTA() {
  return (
    <div className="w-full">
      <a href="https://tu-portafolio.com" target="_blank" rel="noopener noreferrer" className="block">
        <Button
          size="lg"
          className="group relative w-full overflow-hidden bg-primary py-6 text-base font-semibold text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Ver Portafolio
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Button>
      </a>
    </div>
  )
}
