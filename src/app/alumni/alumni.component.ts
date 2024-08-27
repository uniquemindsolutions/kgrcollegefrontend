import { Component, OnInit } from '@angular/core';
import { AlumniService } from '../service/alumni.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-alumni',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule 
  ],
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.css']
})
export class AlumniComponent implements OnInit {
  alumnidataSource: any[] = []; // Full data set from the API
  getallAlumnidata: any[] = [];   // Filtered data set to be displayed
  searchQuery: string = '';     // Model for search input

  constructor(private alumniService: AlumniService) {}

  ngOnInit(): void {
    this.getAlumniData(); // Fetch initial data on component load
  }

  // Fetch alumni data from the service
  getAlumniData(): void {
    this.alumniService.getalumni().subscribe({
      next: (res: any) => {
        this.alumnidataSource = res;
        this.getallAlumnidata = res; // Initially display all data
        console.log("Fetched Alumni Data:", this.alumnidataSource); // Debugging
      },
      error: (err: any) => {
        console.error('Error fetching alumni data:', err);
      }
    });
  }

  // Function to handle search and filter the data
  onSearch_old(): void {
    const query = this.searchQuery.toLowerCase().trim(); // Normalize the search query
    console.log("Search Query:", query); // Debugging

    if (query) {
      this.getallAlumnidata = this.alumnidataSource.filter((alumni: any) => {
        const fullName = alumni.name.toLowerCase();
        const location = alumni.location ? alumni.location.toLowerCase() : '';
        const designation = alumni.designation ? alumni.designation.toLowerCase() : '';

        return (
          fullName.includes(query) ||
          location.includes(query) ||
          designation.includes(query)
        );
      });
    } else {
      // Reset to all alumni if the search query is empty
      this.getallAlumnidata = this.alumnidataSource;
    }

    console.log("Filtered Alumni Data:", this.getallAlumnidata); // Debugging
  }
  onSearch(): void {
    const filterdata = this.searchQuery;
    this.alumniService.getSearcher(filterdata).subscribe({
      next: (res: any) => {
        // this.alumnidataSource = res;
        this.getallAlumnidata = res; // Initially display all data
        console.log("Fetched Alumni Data:", this.alumnidataSource); // Debugging
      },
      error: (err: any) => {
        console.error('Error fetching alumni data:', err);
      }
    });
  }

}
