import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http:HttpClient) { }
  getgalleryImages(typevalue:any, subtypevalue:any){
    return this.http.get(`http://127.0.0.1:8000/gallery-images/?type=Gallery&sub_type=Image`);
  }
  
}
