export interface Hotspot {
  top: number;    // percentage from top of the wall image
  left: number;   // percentage from left of the wall image
  width: number;  // percentage of wall image width
  height: number; // percentage of wall image height
}

export interface Artwork {
  id: string;
  title: string;
  artist: string;
  year: string;
  description: string;
  hotspot: Hotspot;
  image: string;   // full artwork image shown when opened
  audio?: string;  // optional sound triggered on open
}
