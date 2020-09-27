import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TarifHotel } from '../class/tarif-hotel';

const httpOptions={ headers : new HttpHeaders({'Content-Type': 'application/json'})};
const apiUrl='https://www.freedomtravel.tn/ng/grilleTarifaireHotel.php';


@Injectable({ providedIn: 'root' })

export class TarifHotelService {

  tarifHotel = new TarifHotel;

  constructor(private http: HttpClient, private handler : HttpBackend)
   {this.http=new HttpClient(handler);  }

   gettarifhotel(tarifHotel: TarifHotel): Observable<TarifHotel>{
    return this.http.post<TarifHotel>(apiUrl,tarifHotel,httpOptions) ;
  }  

}
