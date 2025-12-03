import { Twitter, Youtube, Instagram } from "lucide-react";

const socialLinks = [
  { name: "Twitter", url: "https://twitter.com/tu-usuario", icon: Twitter },
  { name: "YouTube", url: "https://youtube.com/@tu-usuario", icon: Youtube },
  {
    name: "Instagram",
    url: "https://www.instagram.com/codingwithronin",
    icon: Instagram
  }
];

export default function SecondaryLinks() {
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-border/50 bg-secondary/50 text-muted-foreground transition-all hover:border-primary/50 hover:bg-primary hover:text-primary-foreground hover:shadow-md hover:shadow-primary/20"
            aria-label={link.name}
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
}
