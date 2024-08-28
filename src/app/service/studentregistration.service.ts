import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentregistrationService {
  public baseUrl = environment.baseUrl;


  // private apiUrl = 'http://127.0.0.1:8000/studentRegisterForm/';  // Your backend URL


  constructor(private http: HttpClient) { }

  submitRegistration(formData: FormData): Observable<any> {
    const headers = new HttpHeaders({ 'Accept': 'application/json' });
    // return this.http.post<any>(this.apiUrl, formData);
    return this.http.post<any>(`${this.baseUrl}/studentRegisterForm/`,formData);
  }
}
