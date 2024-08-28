import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { VisionMissionComponent } from './vision-mission/vision-mission.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { HerobannerComponent } from './herobanner/herobanner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { CentralLibraryComponent } from './central-library/central-library.component';
import { ComputerLabComponent } from './computer-lab/computer-lab.component';
import { FacultyMbaComponent } from './faculty-mba/faculty-mba.component';
import { FacultypharmacyComponent } from './facultypharmacy/facultypharmacy.component';
import { MbaComponent } from './admission/mba/mba.component';
import { BpharmacyComponent } from './admission/bpharmacy/bpharmacy.component';
import { MpharmacyComponent } from './admission/mpharmacy/mpharmacy.component';
import { ApplicationComponent } from './admission/application/application.component';
import { PlacementCellComponent } from './placement-cell/placement-cell.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EventGalleryComponent } from './event-gallery/event-gallery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular18';
}
