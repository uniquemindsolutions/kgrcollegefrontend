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
  GalleryVideosSource: any = [];

  constructor(private gallerycomponent: GalleryService) {}

  ngOnInit(): void {
    this.gallerycomponent.getgalleryImages('Gallery', 'Image').subscribe({
      next: (res: any) => {
        this.GalleryPhotosSource = this.GalleryPhotosSource.concat(res);
        console.log("photos", res);
      },
      error: (err: any) => {
        console.error('Error fetching gallery images', err);
      }
    });

    this.gallerycomponent.getgalleryVideos('Gallery', 'Video').subscribe({
      next: (res: any) => {
        this.GalleryVideosSource  = this.GalleryVideosSource.concat(res);
        console.log("Videos", res);
      },
      error: (err: any) => {
        console.error('Error fetching gallery Videos', err);
      }
    });
  }
}
