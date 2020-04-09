import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HotelsService {

  constructor(private http :HttpClient ) { }
  url = 'https://freedomtravel.tn/ng/hotels.php'
  /*bonjour(){
    console.log('bonjour la vie');
  }*/
  gethotels(){
    return this.http.get(this.url);
      }
}
