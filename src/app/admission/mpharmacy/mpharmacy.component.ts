import { Component } from '@angular/core';
import { HeaderComponent } from '../../Components/header/header.component';
import { FooterComponent } from '../../Components/footer/footer.component';

@Component({
  selector: 'app-mpharmacy',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './mpharmacy.component.html',
  styleUrl: './mpharmacy.component.scss',
})
export class MpharmacyComponent {}
