import { useState } from "react";
import type { GalleryPhoto } from "@/models/gallery.model";
import img1 from "@/assets/couple-1.jpg";
import img2 from "@/assets/couple-2.jpg";
import img3 from "@/assets/couple-3.jpg";
import img4 from "@/assets/couple-4.jpg";
import img5 from "@/assets/couple-5.jpg";
import img6 from "@/assets/couple-6.jpg";

const PHOTOS: GalleryPhoto[] = [
  { src: img1, alt: "Rainanh e Neyriellen - foto 1" },
  { src: img2, alt: "Rainanh e Neyriellen - foto 2" },
  { src: img3, alt: "Rainanh e Neyriellen - foto 3" },
  { src: img4, alt: "Rainanh e Neyriellen - foto 4" },
  { src: img5, alt: "Rainanh e Neyriellen - foto 5" },
  { src: img6, alt: "Rainanh e Neyriellen - foto 6" },
];

export function useGallery() {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  return {
    photos: PHOTOS,
    activePhoto,
    openPhoto: (src: string) => setActivePhoto(src),
    closePhoto: () => setActivePhoto(null),
  };
}
