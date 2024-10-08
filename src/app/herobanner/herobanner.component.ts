import { Component } from '@angular/core';
import { HeaderComponent } from "../Components/header/header.component";
import { HttpClientModule } from '@angular/common/http';
import { HomeService } from '../service/home.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-herobanner',
  standalone: true,
  imports: [HeaderComponent,
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './herobanner.component.html',
  styleUrl: './herobanner.component.scss'
})
export class HerobannerComponent {
  dataSource:any[] = [];
  constructor(private homecomponet:HomeService) {}
  ngOnInit(): void {
    
    this.homecomponet.getbanner("Home","Banner").subscribe({
      next:(res:any) => {
        this.dataSource=res;
        console.log("homeservice",res);
      },
      error: (err: any) => {
      }
    })
  }
}
