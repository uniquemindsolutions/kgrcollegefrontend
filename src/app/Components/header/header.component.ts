import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from '../../navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbModule, RouterLink, NavigationComponent, RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private router: Router) {}
  isParentActive(parentRoutes: string[]): boolean {
    // Check if any of the provided parent routes match the current route
    return parentRoutes.some(route => this.router.url.includes(route));
  }

}
