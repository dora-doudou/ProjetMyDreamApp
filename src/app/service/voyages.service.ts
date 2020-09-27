import { Injectable } from '@angular/core';
import{HttpClient, HttpBackend} from '@angular/common/http';
import { Voyages } from '../class/voyages';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VoyagesService {

  constructor(private http: HttpClient, private handler : HttpBackend) { 
    this.http=new HttpClient(handler);
   }
    url='https://www.freedomtravel.tn/json/voyages.php';
    
    getVoyages(): Observable<Voyages>{
      return this.http.get<Voyages>(this.url)
    
   }
}
