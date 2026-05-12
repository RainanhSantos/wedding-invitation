import { useState, useEffect } from "react";
import { WEDDING_DATE } from "@/models/wedding.model";

export interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getDiff(target: Date): TimeRemaining {
  const ms = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor((ms % 86400000) / 3600000),
    minutes: Math.floor((ms % 3600000) / 60000),
    seconds: Math.floor((ms % 60000) / 1000),
  };
}

export function useCountdown(): TimeRemaining {
  const [time, setTime] = useState<TimeRemaining>(() => getDiff(WEDDING_DATE));

  useEffect(() => {
    const id = setInterval(() => setTime(getDiff(WEDDING_DATE)), 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}
