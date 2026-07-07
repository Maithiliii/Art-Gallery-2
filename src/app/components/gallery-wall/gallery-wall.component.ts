import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy, signal } from '@angular/core';
import { ARTWORKS } from '../../data/gallery-data';
import { Artwork } from '../../models/artwork.model';

@Component({
  selector: 'app-gallery-wall',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery-wall.component.html',
  styleUrl: './gallery-wall.component.scss'
})
export class GalleryWallComponent implements OnDestroy {
  readonly artworks: Artwork[] = ARTWORKS;

  readonly hoveredId = signal<string | null>(null);
  readonly openedArtwork = signal<Artwork | null>(null);

  private audio: HTMLAudioElement | null = null;

  hotspotStyle(artwork: Artwork) {
    const { top, left, width, height } = artwork.hotspot;
    return {
      top: `${top}%`,
      left: `${left}%`,
      width: `${width}%`,
      height: `${height}%`
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
  }
}
