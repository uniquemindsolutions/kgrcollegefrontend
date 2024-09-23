import { Component } from '@angular/core';
import { HomeService } from '../service/home.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
  collegeSource: any[] = [];
  StudentCountSource: any[] = []; 
  // FacultyCountSource: any;
  FacultyCountSource: any[] = []; 
  // ProgrmasCountSource: any;
  ProgrmasCountSource: any[] = [];
  constructor(private welcomeComponent: HomeService) { }
  ngOnInit(): void {
    this.welcomeComponent.getCollegeupdates().subscribe({
      next: (res: any) => {
        this.collegeSource = res;
        // console.log("CollegeUpdates", res);

      },
      error: (err: any) => {
      }
    })

    this.welcomeComponent.getStudentCount().subscribe({
      next: (res: any) => {
        this.StudentCountSource = res;
        // console.log("StudentCount", res);

      },
      error: (err: any) => {
      }
    })

    this.welcomeComponent.getFacutlyCount().subscribe({
      next: (res: any) => {
        this.FacultyCountSource = res;
        // console.log("FacultyCount", res);

      },
      error: (err: any) => {
      }
    })

    this.welcomeComponent.getProgramsCount().subscribe({
      next: (res: any) => {
        this.ProgrmasCountSource = res;
        // console.log("programsCount", res);

      },
      error: (err: any) => {
      }
    })
  }
}
