import { Component } from '@angular/core';
import { HeaderComponent } from '../../Components/header/header.component';
import { FooterComponent } from '../../Components/footer/footer.component';
import { AdmissionsService } from '../../service/admissions.service';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-application',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,CommonModule,HttpClientModule],
  templateUrl: './application.component.html',
  styleUrl: './application.component.scss',
})
export class ApplicationComponent {
  applications: any;
  constructor(private ApplicationComponent: AdmissionsService) { }
  ngOnInit(): void {
    this.ApplicationComponent.getAdmissions().subscribe({
      next: (res: any) => {
        console.log("Application Form", res);
        this.applications=res;
      },
      error: (err: any) => {
        console.log("Erro in fectching the admmison form", err);
      }
    })
    
  }
}
