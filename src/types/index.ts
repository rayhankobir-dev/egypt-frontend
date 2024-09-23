import { ComponentType } from "react";

export interface Menu {
  label: string;
  url: string;
  icon: ComponentType<{ className?: string }>;
}

export interface City {
  _id: string;
  slug: string;
  name: string;
  location: string;
  thumbnail: string;
  description: string;
}
