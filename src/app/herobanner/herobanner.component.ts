import { Component } from '@angular/core';
import { HeaderComponent } from "../Components/header/header.component";
import { HttpClient } from '@angular/common/http';
import { HomeService } from '../service/home.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-herobanner',
  standalone: true,
  imports: [HeaderComponent,
    CommonModule
  ],
  templateUrl: './herobanner.component.html',
  styleUrl: './herobanner.component.scss'
})
export class HerobannerComponent {
  dataSource:any;
  constructor(private homecomponet:HomeService) {}
  ngOnInit(): void {
    
    this.homecomponet.getbanner("Home","Images").subscribe({
      next:(res:any) => {
        this.dataSource=res;
        console.log("homeservice",res);
        
      },
      error: (err: any) => {
      }
    })
  }
}
