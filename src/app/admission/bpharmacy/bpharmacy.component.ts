import { Component } from '@angular/core';
import { HeaderComponent } from '../../Components/header/header.component';
import { FooterComponent } from '../../Components/footer/footer.component';

@Component({
  selector: 'app-bpharmacy',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './bpharmacy.component.html',
  styleUrl: './bpharmacy.component.scss',
})
export class BpharmacyComponent {}
