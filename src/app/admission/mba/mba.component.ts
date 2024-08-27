import { Component } from '@angular/core';
import { HeaderComponent } from '../../Components/header/header.component';
import { FooterComponent } from '../../Components/footer/footer.component';

@Component({
  selector: 'app-mba',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './mba.component.html',
  styleUrl: './mba.component.scss',
})
export class MbaComponent {}
