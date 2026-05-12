import { useState } from "react";
import type { RSVPForm } from "@/models/rsvp.model";

export function useRSVP() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<RSVPForm>({ name: "", guests: "1", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const handleChange = (field: keyof RSVPForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return { sent, form, handleSubmit, handleChange };
}
