import { Component } from '@angular/core';
import { HeaderComponent } from "../Components/header/header.component";
import { FooterComponent } from "../Components/footer/footer.component";

@Component({
  selector: 'app-chairman-speaks',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './chairman-speaks.component.html',
  styleUrl: './chairman-speaks.component.scss'
})
export class ChairmanSpeaksComponent {

}
