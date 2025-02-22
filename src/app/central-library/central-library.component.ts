import { Component } from '@angular/core';
import { HeaderComponent } from '../Components/header/header.component';
import { FooterComponent } from '../Components/footer/footer.component';
import { FacilitiesService } from '../service/facilities.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-central-library',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,CommonModule],
  templateUrl: './central-library.component.html',
  styleUrl: './central-library.component.scss',
})
export class CentralLibraryComponent {
  libraryDetails: any;
  libaryBooks: any;
  constructor(private CentralLibraryComponent: FacilitiesService) { }
  ngOnInit(): void {
    this.CentralLibraryComponent.getlibraryInfo().subscribe({
      next: (resp: any) => {
        console.log("Library Details:", resp);
        this.libraryDetails = resp;
      },
      error: (err: any) => {
        console.error("Error fetching library details:", err);
      }
    })
    this.CentralLibraryComponent.getlibrary_Books().subscribe({
      next:(res:any)=>{
        console.log("Libary Books",res);
        this.libaryBooks = res;
      },
      error:(err:any)=>{
        console.log("Error fectching the Books:",err);
      }
    })
  }
}
