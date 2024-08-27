import { Component } from '@angular/core';
import { HeaderComponent } from "../Components/header/header.component";
import { FooterComponent } from "../Components/footer/footer.component";

@Component({
  selector: 'app-director-speaks',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './director-speaks.component.html',
  styleUrl: './director-speaks.component.scss'
})
export class DirectorSpeaksComponent {

}
