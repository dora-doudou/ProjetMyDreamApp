import { Injectable } from '@angular/core';
import{HttpClient, HttpBackend} from '@angular/common/http';
import { Circuits } from '../class/circuits';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CircuitService {

  constructor(private http: HttpClient, private handler : HttpBackend)
  {   this.http=new HttpClient(handler);}

  url='https://www.freedomtravel.tn/json/circuits.php';
    
  getCircuits(): Observable<Circuits>{
    return this.http.get<Circuits>(this.url)
  
 }
}
