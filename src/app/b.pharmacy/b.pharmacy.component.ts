import { Component } from '@angular/core';
import { HeaderComponent } from "../Components/header/header.component";
import { FooterComponent } from "../Components/footer/footer.component";

@Component({
  selector: 'app-b.pharmacy',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './b.pharmacy.component.html',
  styleUrl: './b.pharmacy.component.scss'
})
export class BPharmacyComponent {

}
