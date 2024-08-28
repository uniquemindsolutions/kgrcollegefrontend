import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EventsandActivitesService {
  public baseUrl = environment.baseUrl;


  constructor(private http:HttpClient) { }
  geteventsandactivitesImages(typevalue:any, subtypevalue:any){
    // return this.http.get(`http://127.0.0.1:8000/eventsandactivites/?type=EventsandActivites&sub_type=Image`);
    return this.http.get(`${this.baseUrl}/eventsandactivites/?type=EventsandActivites&sub_type=Image/`);
  }
}
