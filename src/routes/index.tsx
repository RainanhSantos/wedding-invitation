import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/features/hero/Hero";
import { Story } from "@/features/story/Story";
import { Gallery } from "@/features/gallery/Gallery";
import { Venues } from "@/features/venues/Venues";
import { Countdown } from "@/features/countdown/Countdown";
import { RSVP } from "@/features/rsvp/RSVP";
import { Message } from "@/features/message/Message";
import { Footer } from "@/features/footer/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Rainanh & Neyriellen · Convite de Casamento" },
      { name: "description", content: "Celebre conosco o casamento de Rainanh & Neyriellen em 15 de Agosto de 2026, em Janaúba - MG." },
      { property: "og:title", content: "Rainanh & Neyriellen · Casamento" },
      { property: "og:description", content: "Convidamos você para celebrar nosso amor." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Great+Vibes&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Hero />
      <Story />
      <Gallery />
      <Venues />
      <Countdown />
      <RSVP />
      <Message />
      <Footer />
    </main>
  );
}
