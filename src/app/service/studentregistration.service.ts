import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentregistrationService {

  private apiUrl = 'http://127.0.0.1:8000/studentRegisterForm/';  // Your backend URL

  constructor(private http: HttpClient) { }

  submitRegistration(formData: FormData): Observable<any> {
    const headers = new HttpHeaders({ 'Accept': 'application/json' });
    return this.http.post<any>(this.apiUrl, formData);
  }
}
