import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  public baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }
  getmbafacutly(){
    const headers = new HttpHeaders({
      'Authorization': 'Token 8c34e543d34ee4c42633804a5d499c528c28dd38', // Authorization header
    });
    // return this.http.get(`http://127.0.0.1:8000/faculty-mba/`);
    return this.http.get(`${this.baseUrl}/faculty-mba/`,{headers});
  }
  getpharmacyfacutly(){
    const headers = new HttpHeaders({
      'Authorization': 'Token 8c34e543d34ee4c42633804a5d499c528c28dd38', // Authorization header
    });
    // return this.http.get(`http://127.0.0.1:8000/faculty-pharmacy/`);
    return this.http.get(`${this.baseUrl}/faculty-pharmacy/`,{headers});
  }
  
}
