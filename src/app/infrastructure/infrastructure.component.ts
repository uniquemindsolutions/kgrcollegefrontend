import { Component } from '@angular/core';
import { HeaderComponent } from '../Components/header/header.component';
import { FooterComponent } from '../Components/footer/footer.component';

@Component({
  selector: 'app-infrastructure',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './infrastructure.component.html',
  styleUrl: './infrastructure.component.scss',
})
export class InfrastructureComponent {}
