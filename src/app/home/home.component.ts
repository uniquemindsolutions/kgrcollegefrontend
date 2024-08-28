import { Component } from '@angular/core';
import { WelcomeComponent } from '../welcome/welcome.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from '../form/form.component';
import { HeaderComponent } from "../Components/header/header.component";
import { FooterComponent } from "../Components/footer/footer.component";
import { HerobannerComponent } from "../herobanner/herobanner.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [
    NgbModule,
    WelcomeComponent,
    FormComponent,
    HeaderComponent,
    FooterComponent,
    HerobannerComponent
]
})
export class HomeComponent {
  constructor() { }

  ngOnInit(): void {
  }
}  
