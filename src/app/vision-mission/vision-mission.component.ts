import { Component } from '@angular/core';
import { HeaderComponent } from "../Components/header/header.component";
import { FooterComponent } from "../Components/footer/footer.component";

@Component({
  selector: 'app-vision-mission',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './vision-mission.component.html',
  styleUrl: './vision-mission.component.scss'
})
export class VisionMissionComponent {

}
