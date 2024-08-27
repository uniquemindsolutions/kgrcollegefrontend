import { Component,OnInit } from '@angular/core';
import { HeaderComponent } from '../Components/header/header.component';
import { FooterComponent } from '../Components/footer/footer.component';
import { GalleryService } from '../service/gallery.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit {
  GalleryPhotosSource: any = [];
  groupedPhotos: any = [];  // To store grouped data by heading

  constructor(private gallerycomponent: GalleryService) {}

  ngOnInit(): void {
    // Fetch gallery images
    this.gallerycomponent.getgalleryImages("Gallery", "Image").subscribe({
      next: (res: any) => {
        this.GalleryPhotosSource = res;
        // console.log("Gallery Photos", res);

        // Call the function to group photos by heading
        this.groupPhotosByHeading();
      },
      error: (err: any) => {
        console.error("Error fetching gallery images", err);
      }
    });
  }

  groupPhotosByHeading(): void {
    const grouped = this.GalleryPhotosSource.reduce((acc: any, photo: any) => {
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
    this.groupedPhotos = Object.values(grouped);
  }
}
