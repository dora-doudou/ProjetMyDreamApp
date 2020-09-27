import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Rechdispohotel } from '../class/rechdispohotel';

const httpOptions={ headers : new HttpHeaders({'Content-Type': 'application/json'})};
const apiUrl='https://www.freedomtravel.tn/ng/hotels.php';

@Injectable({  providedIn: 'root'})

export class RechdispohotelService {

  rechdispoHotel=new Rechdispohotel;

  constructor(private http: HttpClient, private handler : HttpBackend) 
  {this.http=new HttpClient(handler); }

  recherdispohotel(rechdispoHotel: Rechdispohotel): Observable<Rechdispohotel>{
    console.log(this.rechdispoHotel);
    return this.http.post<Rechdispohotel>(apiUrl,rechdispoHotel,httpOptions) ;
  } 

}
