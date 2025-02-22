import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdmissionsService {
  public baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }
  getAdmissions() {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': 'Token 8c34e543d34ee4c42633804a5d499c528c28dd38', // Authorization header
    });
    return this.http.get(`${this.baseUrl}/Course_Admissions/`, { headers });
  }
}
