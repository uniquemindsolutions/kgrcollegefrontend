import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { VisionMissionComponent } from './vision-mission/vision-mission.component';
import { ChairmanSpeaksComponent } from './chairman-speaks/chairman-speaks.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DirectorSpeaksComponent } from './director-speaks/director-speaks.component';
import { MBAComponent } from './m.b.a/m.b.a.component';
import { BPharmacyComponent } from './b.pharmacy/b.pharmacy.component';
import { MPharmacyComponent } from './m.pharmacy/m.pharmacy.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { AlumniComponent } from './alumni/alumni.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { CentralLibraryComponent } from './central-library/central-library.component';
import { ComputerLabComponent } from './computer-lab/computer-lab.component';
import { ExtracurricularComponent } from './extracurricular/extracurricular.component';
import { PharmacyLabComponent } from './pharmacy-lab/pharmacy-lab.component';
import { CommitteesComponent } from './committees/committees.component';
import { FacultyMbaComponent } from './faculty-mba/faculty-mba.component';
import { FacultypharmacyComponent } from './facultypharmacy/facultypharmacy.component';
import { MbaComponent } from './admission/mba/mba.component';
import { BpharmacyComponent } from './admission/bpharmacy/bpharmacy.component';
import { MpharmacyComponent } from './admission/mpharmacy/mpharmacy.component';
import { ApplicationComponent } from './admission/application/application.component';
import { PlacementCellComponent } from './placement-cell/placement-cell.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactComponent } from './contact/contact.component';
import { EVENTSandACTIVITIESComponent } from './eventsand-activities/eventsand-activities.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'vision-mission', component: VisionMissionComponent },
  { path: 'chairman-speaks', component: ChairmanSpeaksComponent },
  { path: 'director-speaks', component: DirectorSpeaksComponent },
  { path: 'Academicprograms/MBA', component: MBAComponent },
  { path: 'Academicprograms/BPharmacy', component: BPharmacyComponent },
  { path: 'Academicprograms/MPharmacy', component: MPharmacyComponent },
  { path: 'Academicprograms/Syllabus', component: SyllabusComponent },
  { path: 'Academicprograms/Alumni', component: AlumniComponent },
  { path: 'facilities/Infrastructure', component: InfrastructureComponent },
  { path: 'facilities/library', component: CentralLibraryComponent },
  { path: 'facilities/computerLab', component: ComputerLabComponent },
  { path: 'facilities/extracurricular', component: ExtracurricularComponent },
  { path: 'facilities/pharamacyLab', component: PharmacyLabComponent},
  { path: 'facilities/committees', component: CommitteesComponent },
  { path: 'faculty/Mba', component: FacultyMbaComponent },
  { path: 'faculty/pharmacy', component: FacultypharmacyComponent },
  { path: 'adminssion/mba', component: MbaComponent },
  { path: 'adminssion/bpharmacy', component: BpharmacyComponent },
  { path: 'adminssion/mpharmacy', component: MpharmacyComponent },
  { path: 'adminssion/application', component: ApplicationComponent },
  { path: 'placement-cell', component: PlacementCellComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'eventsandactivites', component: EVENTSandACTIVITIESComponent },

  {
    path: 'about-us',
    component: AboutUsComponent,
    children: [],
  },
];
