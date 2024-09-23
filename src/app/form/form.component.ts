import { Component } from '@angular/core';
import { MailService } from '../service/mail.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  name: string = '';
  email: string = '';
  phone: string = '';

  constructor(private mailService: MailService,private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log('Submitting form...'); // Debugging
  
    const formData = {
      name: this.name,
      email: this.email,
      phone: this.phone
    };
    console.log(formData,"payload");
  
    this.mailService.sendFormData(formData).subscribe(
      (response: any) => {
        console.log('Form submitted successfully:', response);
        // alert('Email sent successfully');
        this.router.navigate(['/success']);
      },
      (error) => {
        console.error('Error submitting form:', error);
        alert('Failed to send email. Please try again.');
      }
    );
    this.mailService.sendFormData(formData).subscribe({
      next:(res:any) => {
        console.log("mailservice",res);
      },
      error: (err: any) => {
      }
    })
  }

  testClick() {
    console.log('Button clicked!');
  }
}  
