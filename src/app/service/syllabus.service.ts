import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SyllabusService {
  public baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }
  getSyllabus(){
    const headers = new HttpHeaders({
      'Authorization': 'Token 8c34e543d34ee4c42633804a5d499c528c28dd38', // Authorization header
    });
    return this.http.get(`${this.baseUrl}/syllabus/`,{headers})
  }
}
