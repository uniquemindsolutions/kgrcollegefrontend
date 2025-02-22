import { Component } from '@angular/core';
import { FacilitiesService } from '../service/facilities.service';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import { CentralLibraryComponent } from '../central-library/central-library.component';

@Component({
  selector: 'app-committees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './committees.component.html',
  styleUrl: './committees.component.css'
})
export class CommitteesComponent {
  committes: any;
  constructor(private CentralLibraryComponent: FacilitiesService) { }
    ngOnInit(): void {
      this.CentralLibraryComponent.getCommites().subscribe({
        next: (res: any) => {
          console.log("Comitte Details:", res);
          this.committes = res;
        },
        error: (err: any) => {
          console.log("Error Feching in Committe Details: ", err);
        }
      })
    }
  }
function ngOnInit() {
  throw new Error('Function not implemented.');
}

