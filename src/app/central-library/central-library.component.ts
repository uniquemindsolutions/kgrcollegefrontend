import { Component } from '@angular/core';
import { HeaderComponent } from '../Components/header/header.component';
import { FooterComponent } from '../Components/footer/footer.component';

@Component({
  selector: 'app-central-library',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './central-library.component.html',
  styleUrl: './central-library.component.scss',
})
export class CentralLibraryComponent {}
