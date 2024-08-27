import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  constructor(private http:HttpClient) { }
  getmbafacutly(){
    return this.http.get(`http://127.0.0.1:8000/faculty-mba/`);
  }
  getpharmacyfacutly(){
    return this.http.get(`http://127.0.0.1:8000/faculty-pharmacy/`);
  }
  
}
