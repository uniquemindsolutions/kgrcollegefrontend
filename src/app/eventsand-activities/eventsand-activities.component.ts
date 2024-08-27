import { Component,OnInit} from '@angular/core';
import { EventsandActivitesService } from '../service/eventsand-activites.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eventsand-activities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eventsand-activities.component.html',
  styleUrl: './eventsand-activities.component.css'
})
export class EVENTSandACTIVITIESComponent implements OnInit {
    EventsPhotosSource: any = [];
    EventsPhotos: any = [];  // To store grouped data by heading
    constructor(private eventandactivitescomponent: EventsandActivitesService) {}
  
    ngOnInit(): void {
      // Fetch gallery images
      this.eventandactivitescomponent.geteventsandactivitesImages("EventsandActivites", "Image").subscribe({
        next: (res: any) => {
          this.EventsPhotosSource = res;
          console.log("Event:", res);
  
          // Call the function to group photos by heading
          this.groupPhotosByHeading();
        },
        error: (err: any) => {
          console.error("Error fetching EventsandActivites images", err);
        }
      });
    }
  
    groupPhotosByHeading(): void {
      const grouped = this.EventsPhotosSource.reduce((acc: any, photo: any) => {
        const heading = photo.heading;
  
        // If the heading doesn't exist in the accumulator, initialize it
        if (!acc[heading]) {
          acc[heading] = { heading: heading, images: [] };
        }
  
        // Push the photo into the corresponding heading group
        acc[heading].images.push(photo);
  
        return acc;
      }, {});
  
      // Convert the grouped object to an array for easier iteration in the template
      this.EventsPhotos = Object.values(grouped);
    }
  }
