import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public baseUrl = environment.baseUrl;
  constructor(private http:HttpClient) { }

  getbanner(typevalue:any, subtypevalue:any) {
    // return this.http.get(`http://127.0.0.1:8000/banners/?type=Home&sub_type=Banner`);
    return this.http.get(`${this.baseUrl}/banners/?type=Home&sub_type=Banner`);
  }

  getCollegeupdates(){
    // return this.http.get(`http://127.0.0.1:8000/college-updates/`);
    return this.http.get(`${this.baseUrl}/college-updates/`);
  }

  getStudentCount(){
    // return this.http.get(`http://127.0.0.1:8000/student-counts/`);
    return this.http.get(`${this.baseUrl}/student-counts/`);
  }

  getFacutlyCount(){
    // return this.http.get(`http://127.0.0.1:8000/faculty-counts/`);
    return this.http.get(`${this.baseUrl}/faculty-counts/`);
  }

  getProgramsCount(){
    // return this.http.get(`http://127.0.0.1:8000/programs-counts/`);
    return this.http.get(`${this.baseUrl}/programs-counts/`);
  }
  
}
