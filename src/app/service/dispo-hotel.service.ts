import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DispoHotel } from '../class/dispo-hotel';

const httpOptions={ headers : new HttpHeaders({'Content-Type': 'application/json'}) };
const apiUrl='https://www.freedomtravel.tn/ng/disponibilitehotel.php';

@Injectable({
  providedIn: 'root'
})

export class DispoHotelService {
  dispoHotel=new DispoHotel;
  constructor(private http: HttpClient, private handler : HttpBackend) 
  {  this.http=new HttpClient(handler);}

  dispohotel(dispoHotel: DispoHotel): Observable<DispoHotel>{
    console.log(this.dispoHotel);
    return this.http.post<DispoHotel>(apiUrl,dispoHotel,httpOptions) ;
  }  

}
