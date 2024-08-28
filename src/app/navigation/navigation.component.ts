import { Component, NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';

// import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    RouterModule,  // Add RouterModule here],
  ],
    templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

}
