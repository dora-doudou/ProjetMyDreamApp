import { Injectable } from '@angular/core';
import { HttpHeaders, HttpBackend,HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carousel } from '../class/carousel';


const hhtpOptions={
  headers : new HttpHeaders ({'Content-type' : 'application/json' })
};
const url= 'https://www.freedomtravel.tn/ng/carouselHotel.php';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  carousel = new Carousel;

  constructor(private http : HttpClient, private handler : HttpBackend) { }
  hoturl = 'https://freedomtravel.tn/json/hotels.php';
  
  vilurl = "https://www.freedomtravel.tn/json/ville.php";

getcarousel(carousel:Carousel): Observable<Carousel>{
  return this.http.post<Carousel>(url, carousel, hhtpOptions)
}

gethotels(){
  return this.http.get(this.hoturl);
}
  
getville(){
  return this.http.get(this.vilurl);
}

}
