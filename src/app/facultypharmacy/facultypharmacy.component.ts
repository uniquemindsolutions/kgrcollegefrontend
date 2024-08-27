import { Component } from '@angular/core';
import { HeaderComponent } from '../Components/header/header.component';
import { FooterComponent } from '../Components/footer/footer.component';
import { FacultyService } from '../service/faculty.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-facultypharmacy',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,CommonModule],
  templateUrl: './facultypharmacy.component.html',
  styleUrl: './facultypharmacy.component.scss',
})
export class FacultypharmacyComponent {
  facutlypharmacydataSource:any;
  constructor(private pharmacyComponent:FacultyService) {}
  ngOnInit(): void {
    
    this.pharmacyComponent.getpharmacyfacutly().subscribe({
      next:(res:any) => {
        this.facutlypharmacydataSource=res;
        // console.log("pharmacyfaculty",res);
        
      },
      error: (err: any) => {
      }
    })
  }
}
