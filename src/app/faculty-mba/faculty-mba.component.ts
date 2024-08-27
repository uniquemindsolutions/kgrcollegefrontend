import { Component } from '@angular/core';
import { HeaderComponent } from '../Components/header/header.component';
import { FooterComponent } from '../Components/footer/footer.component';
import { FacultyService } from '../service/faculty.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-faculty-mba',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,CommonModule],
  templateUrl: './faculty-mba.component.html',
  styleUrl: './faculty-mba.component.scss',
})
export class FacultyMbaComponent {
  alumnidataSource:any;
  constructor(private mbaComponent:FacultyService) {}
  ngOnInit(): void {
    
    this.mbaComponent.getmbafacutly().subscribe({
      next:(res:any) => {
        this.alumnidataSource=res;
        // console.log("mbafaculty",res);
        
      },
      error: (err: any) => {
      }
    })
  }
}
