import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit, signal } from '@angular/core';
import { ARTWORKS } from '../../data/gallery-data';
import { Artwork } from '../../models/artwork.model';

interface Particle {
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  white: boolean;
}

@Component({
  selector: 'app-gallery-wall',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery-wall.component.html',
  styleUrl: './gallery-wall.component.scss'
})
export class GalleryWallComponent implements OnInit, OnDestroy {
  readonly artworks: Artwork[] = ARTWORKS;
  readonly particles: Particle[] = Array.from({ length: 60 }, (_, i) => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 14 + 12,
    delay: -(Math.random() * 20),
    white: i % 5 === 0
  }));

  readonly hoveredId = signal<string | null>(null);
  readonly openedArtwork = signal<Artwork | null>(null);
  readonly musicPlaying = signal(false);

  private audio: HTMLAudioElement | null = null;
  private readonly bgMusic = new Audio('assets/audio/ArtGalMusic.mp3');

  ngOnInit(): void {
    this.bgMusic.loop = true;
    this.bgMusic.volume = 0.35;
    this.tryPlayMusic();

    // Browsers block audio autoplay until the user interacts with the page.
    // Listen just once for the first interaction to unlock it, so this never
    // fights with the user later pausing via the toggle button.
    document.addEventListener('click', this.unlockMusicOnce, { once: true });
    document.addEventListener('keydown', this.unlockMusicOnce, { once: true });
  }

  toggleMusic(): void {
    if (this.musicPlaying()) {
      this.bgMusic.pause();
      this.musicPlaying.set(false);
    } else {
      this.tryPlayMusic();
    }
  }

  private readonly unlockMusicOnce = (): void => {
    if (!this.musicPlaying()) {
      this.tryPlayMusic();
    }
  };

  private tryPlayMusic(): void {
    this.bgMusic
      .play()
      .then(() => this.musicPlaying.set(true))
      .catch(() => undefined);
  }

  hotspotStyle(artwork: Artwork) {
    const { top, left, width, height, rotation } = artwork.hotspot;
    return {
      top: `${top}%`,
      left: `${left}%`,
      width: `${width}%`,
      height: `${height}%`,
      transform: rotation ? `rotate(${rotation}deg)` : undefined
    };
  }

  onHoverEnter(id: string): void {
    this.hoveredId.set(id);
  }

  onHoverLeave(id: string): void {
    if (this.hoveredId() === id) {
      this.hoveredId.set(null);
    }
  }

  open(artwork: Artwork): void {
    this.openedArtwork.set(artwork);
    this.playAudio(artwork.audio);
  }

  close(): void {
    this.openedArtwork.set(null);
    this.stopAudio();
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.openedArtwork()) {
      this.close();
    }
  }

  private playAudio(src?: string): void {
    this.stopAudio();
    if (!src) {
      return;
    }
    this.audio = new Audio(src);
    this.audio.volume = 0.6;
    // Autoplay can be blocked by the browser, and the placeholder audio
    // files don't exist yet — swallow the rejection either way.
    this.audio.play().catch(() => undefined);
  }

  private stopAudio(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }
  }

  ngOnDestroy(): void {
    this.stopAudio();
    this.bgMusic.pause();
    document.removeEventListener('click', this.unlockMusicOnce);
    document.removeEventListener('keydown', this.unlockMusicOnce);
  }
}
