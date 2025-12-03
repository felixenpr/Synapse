import Image from "next/image";

export default function ProfileHeader() {
  return (
    <header className="flex flex-col items-center gap-4 text-center">
      <div className="relative">
        <div className="absolute -inset-1 rounded-full bg-primary/50 blur-md" />
        <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-primary/30 sm:h-32 sm:w-32">
          <Image
            src="/felix-profile.jpg"
            alt="Foto de perfil"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
        Félix Pérez
      </h1>
      <p className="text-base font-medium text-primary sm:text-lg">{`Semi-Senior Frontend Developer`}</p>
      <p className="max-w-sm text-sm leading-relaxed text-muted-foreground text-balance sm:text-base">
        Especializado en React y Next.js, construyo interfaces modernas y de
        alto impacto que combinan velocidad, usabilidad y experiencia visual.
      </p>
    </header>
  );
}
