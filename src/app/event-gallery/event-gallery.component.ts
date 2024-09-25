import { Component } from '@angular/core';
import { HeaderComponent } from '../Components/header/header.component';
import { FooterComponent } from '../Components/footer/footer.component';
import { EventsandActivitesService } from '../service/eventsand-activites.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-event-gallery',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,CommonModule],
  templateUrl: './event-gallery.component.html',
  styleUrl: './event-gallery.component.scss',
})
export class EventGalleryComponent{
  EventsPhotosSource: any = [];
  EventsVideoSource: any = [];
  EventsPhotos: any = [];  // To store grouped data by heading
  constructor(private eventandactivitescomponent: EventsandActivitesService) {}

  ngOnInit(): void {
    // Fetch gallery images
    this.eventandactivitescomponent.geteventsandactivitesImages("EventsandActivites", "Image").subscribe({
      next: (res: any) => {
        this.EventsPhotosSource = res;
        console.log("Event:", res);
        this.groupPhotosAndVideos();
      },
      error: (err: any) => {
        console.error("Error fetching EventsandActivites images", err);
      }
    });

    // Fetch gallery videos
    this.eventandactivitescomponent.geteventsandactivitesVideos("EventsandActivites", "Video").subscribe({
      next: (res: any) => {
        this.EventsVideoSource = res;
        console.log("EventVideos:", res);
        this.groupPhotosAndVideos();
      },
      error: (err: any) => {
        console.error("Error fetching EventsandActivites Videos", err);
      }
    });
  }

  groupPhotosAndVideos(): void {
    const grouped: any = {};
  
    // Group images by heading
    this.EventsPhotosSource.forEach((photo: any) => {
      const heading = photo.heading;
  
      if (!grouped[heading]) {
        grouped[heading] = { heading: heading, images: [], videos: [] };
      }
  
      grouped[heading].images.push(photo);
    });
  
    // Group videos by heading
    this.EventsVideoSource.forEach((video: any) => {
      const heading = video.heading;
  
      if (!grouped[heading]) {
        grouped[heading] = { heading: heading, images: [], videos: [] };
      }
  
      console.log('Video URL:', video.video);  // Log the video URL for debugging
      grouped[heading].videos.push(video);
    });
  
    // Convert the grouped object to an array for easier iteration in the template
    this.EventsPhotos = Object.values(grouped);
  }  
}
