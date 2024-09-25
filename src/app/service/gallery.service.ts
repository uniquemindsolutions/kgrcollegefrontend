import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  public baseUrl = environment.baseUrl;
  constructor(private http:HttpClient) { }
  getgalleryImages(typevalue:any, subtypevalue:any){
    const headers = new HttpHeaders({
      'Authorization': 'Token 8c34e543d34ee4c42633804a5d499c528c28dd38', // Authorization header
    });
    // return this.http.get(`http://127.0.0.1:8000/gallery-images/?type=Gallery&sub_type=Image`);
    return this.http.get(`${this.baseUrl}/gallery-images/?type=Gallery&sub_type=Image`,{headers});
  }
  getgalleryVideos(typevalue:any, subtypevalue:any){
    const headers = new HttpHeaders({
      'Authorization': 'Token 98bd29055e21fabbde860dc2f1a98fe16ec52b23', // Authorization header
    });
    // return this.http.get(`http://127.0.0.1:8000/gallery-images/?type=Gallery&sub_type=Image`);
    return this.http.get(`${this.baseUrl}/gallery-videos/?type=Gallery&sub_type=Video`,{headers});
  }
}
