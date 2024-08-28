import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  public baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }
  getmbafacutly(){
    // return this.http.get(`http://127.0.0.1:8000/faculty-mba/`);
    return this.http.get(`${this.baseUrl}/faculty-mba/`);
  }
  getpharmacyfacutly(){
    // return this.http.get(`http://127.0.0.1:8000/faculty-pharmacy/`);
    return this.http.get(`${this.baseUrl}/faculty-pharmacy/`);
  }
  
}
