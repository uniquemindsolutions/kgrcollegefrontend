import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  getbanner(typevalue:any, subtypevalue:any) {
    return this.http.get(`http://127.0.0.1:8000/banners/?type=Home&sub_type=Banner`);
  }

  getCollegeupdates(){
    return this.http.get(`http://127.0.0.1:8000/college-updates/`);
  }

  getStudentCount(){
    return this.http.get(`http://127.0.0.1:8000/student-counts/`);
  }

  getFacutlyCount(){
    return this.http.get(`http://127.0.0.1:8000/faculty-counts/`);
  }

  getProgramsCount(){
    return this.http.get(`http://127.0.0.1:8000/programs-counts/`);
  }
  
}
