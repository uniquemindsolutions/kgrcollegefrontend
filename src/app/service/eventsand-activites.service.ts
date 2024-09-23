import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EventsandActivitesService {
  public baseUrl = environment.baseUrl;


  constructor(private http:HttpClient) { }
  geteventsandactivitesImages(typevalue:any, subtypevalue:any){
    const headers = new HttpHeaders({
      'Authorization': 'Token 8c34e543d34ee4c42633804a5d499c528c28dd38', // Authorization header
    });
    // return this.http.get(`http://127.0.0.1:8000/eventsandactivites/?type=EventsandActivites&sub_type=Image`);
    return this.http.get(`${this.baseUrl}/eventsandactivites/?type=EventsandActivites&sub_type=Image`,{headers});
  }
}
