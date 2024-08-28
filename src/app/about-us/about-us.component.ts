import { Component } from '@angular/core';
import { HeaderComponent } from '../Components/header/header.component';
import { AppComponent } from '../app.component';
import { FooterComponent } from '../Components/footer/footer.component';
import { ChairmanSpeaksComponent } from '../chairman-speaks/chairman-speaks.component';
import { VisionMissionComponent } from '../vision-mission/vision-mission.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    HeaderComponent,
    AppComponent,
    FooterComponent,
    ChairmanSpeaksComponent,
    VisionMissionComponent,
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {}
