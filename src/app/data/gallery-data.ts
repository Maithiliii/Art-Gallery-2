import { Artwork } from '../models/artwork.model';

// Placeholder dataset. Replace `image` (and `audio`, optional) paths once
// real artwork files are dropped into src/assets/images/artworks and
// src/assets/audio. Hotspot percentages are aligned to the frame positions
// drawn in src/assets/images/wall-placeholder.svg — update both together
// if the wall image changes.
export const ARTWORKS: Artwork[] = [
  {
    id: 'artwork-1',
    title: 'Untitled I',
    artist: 'Your Name',
    year: '2026',
    description: 'Placeholder piece. Swap in your own artwork image and story.',
    hotspot: { top: 30, left: 12, width: 15, height: 30 },
    image: 'assets/images/artworks/artwork-1.svg',
    audio: 'assets/audio/artwork-1.mp3'
  },
  {
    id: 'artwork-2',
    title: 'Untitled II',
    artist: 'Your Name',
    year: '2026',
    description: 'Placeholder piece. Swap in your own artwork image and story.',
    hotspot: { top: 25, left: 32, width: 15, height: 38 },
    image: 'assets/images/artworks/artwork-2.svg',
    audio: 'assets/audio/artwork-2.mp3'
  },
  {
    id: 'artwork-3',
    title: 'Untitled III',
    artist: 'Your Name',
    year: '2026',
    description: 'Placeholder piece. Swap in your own artwork image and story.',
    hotspot: { top: 28, left: 52, width: 15, height: 33 },
    image: 'assets/images/artworks/artwork-3.svg',
    audio: 'assets/audio/artwork-3.mp3'
  },
  {
    id: 'artwork-4',
    title: 'Untitled IV',
    artist: 'Your Name',
    year: '2026',
    description: 'Placeholder piece. Swap in your own artwork image and story.',
    hotspot: { top: 30, left: 72, width: 15, height: 30 },
    image: 'assets/images/artworks/artwork-4.svg',
    audio: 'assets/audio/artwork-4.mp3'
  }
];
