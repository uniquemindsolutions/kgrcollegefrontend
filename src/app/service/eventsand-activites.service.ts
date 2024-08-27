import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EventsandActivitesService {

  constructor(private http:HttpClient) { }
  geteventsandactivitesImages(typevalue:any, subtypevalue:any){
    return this.http.get(`http://127.0.0.1:8000/eventsandactivites/?type=EventsandActivites&sub_type=Image`);
  }
}
