import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MailService {


  private apiUrl = 'http://127.0.0.1:8000/send-form/'; // Django API URL
  public baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  sendFormData(formData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<any>(this.apiUrl, formData, { headers });
    // return this.http.post<any>(`${this.baseUrl}/send-form/`,formData,{headers});
  }

  ImportantSite(){
    const headers = new HttpHeaders({
      'Authorization': 'Token 8c34e543d34ee4c42633804a5d499c528c28dd38', // Authorization header
      // 'Authorization': 'Token 98bd29055e21fabbde860dc2f1a98fe16ec52b23', // Authorization header
    });

    return this.http.get(`${this.baseUrl}/ImportantSites/`,{headers});
    // return this.http.post<any>(`${this.baseUrl}/send-form/`,formData,{headers});
  }
}
