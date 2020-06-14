import { Injectable } from '@angular/core';
import {HttpClient,HttpBackend} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Ville} from '../class/ville'

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  url='https://www.freedomtravel.tn/ng/villes.php';

  constructor( private http: HttpClient, private handler : HttpBackend) { 
 this.http=new HttpClient(handler);
}

getville(): Observable<Ville[]>{
    return this.http.get<Ville[]>(this.url)
    
  }
}
