import { Component } from '@angular/core';
import { HeaderComponent } from "../Components/header/header.component";
import { FooterComponent } from "../Components/footer/footer.component";

@Component({
  selector: 'app-m.b.a',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './m.b.a.component.html',
  styleUrl: './m.b.a.component.scss'
})
export class MBAComponent {

}
