import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VoyagesService {
  url = 'https://www.freedomtravel.tn/json/ville.php';
//https://www.freedomtravel.tn/json/voyages.php

  constructor(private http : HttpClient) { }
  getville(){
    console.log( this.http.get(this.url))
  }
}
