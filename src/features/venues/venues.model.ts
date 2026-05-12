import { CEREMONY_TIME, RECEPTION_TIME } from "@/shared/models/wedding.config";

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
