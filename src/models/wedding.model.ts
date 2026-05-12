export const WEDDING_DATE = new Date("2026-08-15T19:00:00-03:00");
export const WEDDING_DATE_LABEL = "15 de Agosto de 2026";
export const CEREMONY_TIME = "19h00";
export const RECEPTION_TIME = "21h00";
export const HASHTAG = "#RainanhENeyriellen";

export interface StoryEvent {
  year: string;
  title: string;
  text: string;
}

export const STORY_EVENTS: StoryEvent[] = [
  {
    year: "2019",
    title: "O primeiro olhar",
    text: "Em uma tarde qualquer, dois caminhos se cruzaram — e nada mais foi como antes.",
  },
  {
    year: "2021",
    title: "O começo do nós",
    text: "Entre conversas longas e risadas sem motivo, descobrimos que estávamos em casa um no outro.",
  },
  {
    year: "2024",
    title: "O pedido",
    text: "De joelhos, com o coração tremendo, veio a pergunta mais importante. E veio o sim.",
  },
  {
    year: "2026",
    title: "O para sempre",
    text: "Agora, diante de Deus e dos que amamos, escrevemos juntos o próximo capítulo.",
  },
];

export type VenueIconName = "Church" | "GlassWater";

export interface Venue {
  iconName: VenueIconName;
  label: string;
  place: string;
  address: string;
  time: string;
}

export const VENUES: Venue[] = [
  {
    iconName: "Church",
    label: "Cerimônia Religiosa",
    place: "Igreja Nossa Senhora de Fátima",
    address: "Rua E, 25 - Isaías Pereira, Janaúba - MG",
    time: CEREMONY_TIME,
  },
  {
    iconName: "GlassWater",
    label: "Recepção",
    place: "Espaço Verças",
    address: "R. José Barbosa, 250 - Planalto II, Janaúba - MG",
    time: RECEPTION_TIME,
  },
];
