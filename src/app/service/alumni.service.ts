import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    // return this.http.get(this.apiUrl);
    return this.http.get(`${this.baseUrl}/alumni/`);
  }
  getSearcher(filterdata:any): Observable<any> {
    return this.http.get(`${this.baseUrl}/alumni/?name=`+filterdata);
}
}
