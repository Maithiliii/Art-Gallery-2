import { Component } from '@angular/core';
import { GalleryWallComponent } from './components/gallery-wall/gallery-wall.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GalleryWallComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'art-gallery-2';
}
