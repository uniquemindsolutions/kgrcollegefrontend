import { Component } from '@angular/core';
import { HeaderComponent } from "../Components/header/header.component";
import { FooterComponent } from "../Components/footer/footer.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vision-mission',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,RouterLink, CommonModule],
  templateUrl: './vision-mission.component.html',
  styleUrl: './vision-mission.component.scss'
})
export class VisionMissionComponent {

}
