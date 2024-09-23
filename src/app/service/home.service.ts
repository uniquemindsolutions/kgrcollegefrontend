import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public baseUrl = environment.baseUrl;
  constructor(private http:HttpClient) { }  

  getbanner(typevalue:any, subtypevalue:any) {
    const headers = new HttpHeaders({
      'Authorization': 'Token 98bd29055e21fabbde860dc2f1a98fe16ec52b23', // Authorization header
    });
    // return this.http.get(`http://127.0.0.1:8000/banners/?type=Home&sub_type=Banner`);
    return this.http.get(`${this.baseUrl}/banners/?type=Home&sub_type=Banner`,{headers});
  }

  getCollegeupdates(){
    const headers = new HttpHeaders({
      'Authorization': 'Token 98bd29055e21fabbde860dc2f1a98fe16ec52b23', // Authorization header
    });
    // return this.http.get(`http://127.0.0.1:8000/college-updates/`);
    return this.http.get(`${this.baseUrl}/college-updates/`,{headers});
  }

  getStudentCount(){
    const headers = new HttpHeaders({
      'Authorization': 'Token 98bd29055e21fabbde860dc2f1a98fe16ec52b23', // Authorization header
    });
    // return this.http.get(`http://127.0.0.1:8000/student-counts/`);
    return this.http.get(`${this.baseUrl}/student-counts/`,{headers});
  }

  getFacutlyCount(){
    const headers = new HttpHeaders({
      'Authorization': 'Token 98bd29055e21fabbde860dc2f1a98fe16ec52b23', // Authorization header
    });
    // return this.http.get(`http://127.0.0.1:8000/faculty-counts/`);
    return this.http.get(`${this.baseUrl}/faculty-counts/`,{headers});
  }

  getProgramsCount(){
    const headers = new HttpHeaders({
      'Authorization': 'Token 98bd29055e21fabbde860dc2f1a98fe16ec52b23', // Authorization header
    });
    // return this.http.get(`http://127.0.0.1:8000/programs-counts/`);
    return this.http.get(`${this.baseUrl}/programs-counts/`,{headers});
  }
  
}
