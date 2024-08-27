import { Component } from '@angular/core';
import { HeaderComponent } from "../Components/header/header.component";
import { FooterComponent } from "../Components/footer/footer.component";

@Component({
  selector: 'app-m.pharmacy',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './m.pharmacy.component.html',
  styleUrl: './m.pharmacy.component.scss'
})
export class MPharmacyComponent {

}
