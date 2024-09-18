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
      'Authorization': 'Token 98bd29055e21fabbde860dc2f1a98fe16ec52b23', // Authorization header
    });
    return this.http.get(`${this.baseUrl}/syllabus/`,{headers})
  }
}
