import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumniService {
  private apiUrl = 'http://127.0.0.1:8000/alumni/';

  constructor(private http: HttpClient) { }

  getalumni(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  getSearcher(filterdata:any): Observable<any> {
    return this.http.get(this.apiUrl+`?name=`+filterdata);
}
}
