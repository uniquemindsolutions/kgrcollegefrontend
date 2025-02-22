import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {
  public baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }
  getlibraryInfo() {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': 'Token 8c34e543d34ee4c42633804a5d499c528c28dd38', // Authorization header
    });
    return this.http.get(`${this.baseUrl}/LibraryInfo/`,{headers});
  }
  getlibrary_Books() {
    const headers = new HttpHeaders({
      'Authorization': 'Token 8c34e543d34ee4c42633804a5d499c528c28dd38', // Authorization header
    });
    return this.http.get(`${this.baseUrl}/Library_Books/`,{headers});
  }
  getCommites(){
    const headers = new HttpHeaders({
      'Authorization': 'Token 8c34e543d34ee4c42633804a5d499c528c28dd38', // Authorization header
    });
    return this.http.get(`${this.baseUrl}/committees/`,{headers});
  }
}
