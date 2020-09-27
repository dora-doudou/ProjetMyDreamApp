import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Hotels } from '../class/hotels';
@Injectable({
  providedIn: 'root'
})

export class HotelsService {

  constructor(private http :HttpClient, private handler : HttpBackend ) 
  { this.http=new HttpClient(handler);}

  url = 'https://freedomtravel.tn/ng/hotels.php'

  gethotels(){
    return this.http.get(this.url);
      }
}
