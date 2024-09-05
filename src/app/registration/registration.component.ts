import { Component } from '@angular/core';
import { HeaderComponent } from '../Components/header/header.component';
import { FooterComponent } from '../Components/footer/footer.component';
import { StudentregistrationService } from '../service/studentregistration.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,CommonModule,FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent {
  registrationData = {
    studentName: '',
    fatherName: '',
    dob: '',
    address: '',
    contact: '',
    email: '',
    mba: '',
    passedYear: '',
    college: '',
    university: '',
    percentage: '',
  };
  fileToUpload: File | null = null;

  constructor(private registrationService: StudentregistrationService) {}

  onSubmit(event: Event) {
    event.preventDefault();
    const formData: FormData = new FormData();

    // Append form fields to FormData object
    Object.keys(this.registrationData).forEach((key) => {
      formData.append(key, this.registrationData[key as keyof typeof this.registrationData]);
    });

    // Append file if exists
    if (this.fileToUpload) {
      formData.append('upload', this.fileToUpload, this.fileToUpload.name);
    }

    // Send form data via service
    this.registrationService.submitRegistration(formData).subscribe(
      (response) => {
        alert('Details are successfully sent');
        console.log('Registration successful', response);
      },
      (error) => {
        alert('There was an error sending the details.');
        console.error('Error during registration', error);
      }
    );
  }

  onFileChange(event: any) {
    this.fileToUpload = event.target.files[0];
  }
}