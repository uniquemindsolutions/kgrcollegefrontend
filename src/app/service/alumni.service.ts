import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlumniService {
  // private apiUrl = 'http://127.0.0.1:8000/alumni/';
  public baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getalumni(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Token 98bd29055e21fabbde860dc2f1a98fe16ec52b23', // Authorization header
    });
    // return this.http.get(this.apiUrl);
    return this.http.get(`${this.baseUrl}/alumni/`,{headers});
  }
  getSearcher(filterdata:any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Token 98bd29055e21fabbde860dc2f1a98fe16ec52b23', // Authorization header
    });
    return this.http.get(`${this.baseUrl}/alumni/?name=`+filterdata,{headers});
}
}
