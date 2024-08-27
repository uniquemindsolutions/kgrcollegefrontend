import { Component } from '@angular/core';
import { HeaderComponent } from '../Components/header/header.component';
import { FooterComponent } from '../Components/footer/footer.component';

@Component({
  selector: 'app-computer-lab',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './computer-lab.component.html',
  styleUrl: './computer-lab.component.scss',
})
export class ComputerLabComponent {}
