import { Component } from '@angular/core';
import { HerobannerComponent } from "../herobanner/herobanner.component";
import { FooterComponent } from "../Components/footer/footer.component";

@Component({
  selector: 'app-sucess-page',
  standalone: true,
  imports: [HerobannerComponent, FooterComponent],
  templateUrl: './sucess-page.component.html',
  styleUrl: './sucess-page.component.css'
})
export class SucessPageComponent {

}
