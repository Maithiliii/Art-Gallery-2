import { Artwork } from '../models/artwork.model';

// Hotspot percentages are derived from image-map coordinates (pixel-based,
// against the original 483x258-scale layout of the wall image — ratio-
// consistent with the current public/assets/images/ArtGal.png).
// Add the remaining artworks the same way as their coordinates come in.
export const ARTWORKS: Artwork[] = [
  {
    id: 'artwork-1',
    title: 'Stone That Breathes',
    description: 'What seems like a rock is revealed as a meditating being, still but alive. Vibrations ripple from it like unseen energy. Red splatters bleed across the piece, pulling serenity into tension.',
    hotspot: { top: 18.6, left: 19.46, width: 16.77, height: 34.5 },
    image: 'assets/images/artworks/art3.jpeg',
    audio: 'assets/audio/art3.mp3'
  },
  {
    id: 'artwork-2',
    title: 'Unknown Fragment',
    description: 'An ungraspable shape that resists clear meaning. Its fractured lines invite interpretation, leaving the viewer to project their own imagery onto the form.',
    hotspot: { top: 17.49, left: 72.9, width: 7.85, height: 17.49 },
    image: 'assets/images/artworks/art5.jpeg',
    audio: 'assets/audio/art5.mp3'
  },
  {
    id: 'artwork-4',
    title: 'The Tree That Sees',
    description: 'A towering form of bark and flesh, sprouting three eyes, three mouths, three noses, and only a single leaf. It watches, speaks, and breathes in multiples, yet remains incomplete.',
    hotspot: { top: 34.84, left: 40.41, width: 8.13, height: 19.15 },
    image: 'assets/images/artworks/art4.jpeg',
    audio: 'assets/audio/art4.mp3'
  },
  {
    id: 'artwork-5',
    title: 'Vessel of Echoes',
    description: 'Half a face, half a vase, the beard and lips morph into a container of abstract blooms. The flower-eye returns, now surrounded by strange designs, turning the body into both subject and object.',
    hotspot: { top: 42.62, left: 73.01, width: 2.63, height: 8.71 },
    image: 'assets/images/artworks/art2.jpeg',
    audio: 'assets/audio/art2.mp3'
  },
  {
    id: 'artwork-6',
    title: 'Crossed in Red',
    description: 'A faceless figure hangs crucified, crowned not with thorns but with a Christmas hat. The image blurs the line between birth and sacrifice, suggesting that the joy of Christmas cannot exist without the shadow of the cross. It invites reflection on faith, celebration, and the cost behind the story.',
    hotspot: { top: 42.89, left: 78.13, width: 2.63, height: 8.71 },
    image: 'assets/images/artworks/art7.jpeg',
    audio: 'assets/audio/art7.mp3'
  },
  {
    id: 'artwork-7',
    title: 'The Apple and the Moon',
    description: 'Inside a boxed frame stands a barren tree with one apple. Beside it, a figure whose head is only an eye holds a balloon that is the moon. A quiet surreal dialogue between hunger, sight, and dream.',
    hotspot: { top: 40.82, left: 52.09, width: 6.85, height: 9.38 },
    image: 'assets/images/artworks/art6.jpeg',
    audio: 'assets/audio/art6.mp3'
  },
  {
    id: 'artwork-8',
    title: 'Smoke and Wing',
    description: 'An abstract portrait with curls of hair, smoke curling from the lips, and a butterfly hovering nearby. The figure drifts between heaviness and flight, grounded and fleeting at once.',
    hotspot: { top: 17.69, left: 62.39, width: 6.71, height: 36.24 },
    image: 'assets/images/artworks/art8.jpeg',
    audio: 'assets/audio/art8.mp3'
  },
  {
    id: 'artwork-9',
    title: 'Blooming Perception',
    description: 'A distorted self-portrait where the eye becomes a flower, symbolizing vision as growth. The tangled curls frame the chaos of thought, blurring the line between identity and imagination.',
    hotspot: { top: 17.69, left: 40.41, width: 18.89, height: 10.44 },
    image: 'assets/images/artworks/art1.jpeg',
    audio: 'assets/audio/art1.mp3'
  }
];
