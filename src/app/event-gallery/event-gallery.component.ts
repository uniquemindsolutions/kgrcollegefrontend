import { Component } from '@angular/core';
import { HeaderComponent } from '../Components/header/header.component';
import { FooterComponent } from '../Components/footer/footer.component';

@Component({
  selector: 'app-event-gallery',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './event-gallery.component.html',
  styleUrl: './event-gallery.component.scss',
})
export class EventGalleryComponent {}
