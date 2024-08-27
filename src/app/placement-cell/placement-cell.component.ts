import { Component } from '@angular/core';
import { HeaderComponent } from '../Components/header/header.component';
import { FooterComponent } from '../Components/footer/footer.component';

@Component({
  selector: 'app-placement-cell',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './placement-cell.component.html',
  styleUrl: './placement-cell.component.scss',
})
export class PlacementCellComponent {}
