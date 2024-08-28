import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MailService {


  // private apiUrl = 'http://127.0.0.1:8000/send-form/'; // Django API URL
  public baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  sendFormData(formData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    // return this.http.post<any>(this.apiUrl, formData, { headers });
    return this.http.post<any>(`${this.baseUrl}/send-form/`,formData,{headers});
  }
}
