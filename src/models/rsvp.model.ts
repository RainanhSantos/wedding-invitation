export interface RSVPForm {
  name: string;
  guests: string;
  message: string;
}

export const GUEST_OPTIONS = ["0", "1", "2", "3", "4"] as const;
