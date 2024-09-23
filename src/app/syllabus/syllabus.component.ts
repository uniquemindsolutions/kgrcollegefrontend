import { Component } from '@angular/core';
import { SyllabusService } from '../service/syllabus.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-syllabus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './syllabus.component.html',
  styleUrl: './syllabus.component.css'
})
export class SyllabusComponent {
  getAllsyllabusdata: any[] = [];
  constructor(private syllabusService: SyllabusService) {}
  ngOnInit():void {
    this.getsyllabusdata();
  }
  getsyllabusdata(): void {
    this.syllabusService.getSyllabus().subscribe({
      next: (res: any) => {
        this.getAllsyllabusdata = res;
        console.log("Fetched Alumni Data:", this.getAllsyllabusdata); // Debugging
      },
      error: (err: any) => {
        console.error('Error fetching alumni data:', err);
      }
    });
  }

}
