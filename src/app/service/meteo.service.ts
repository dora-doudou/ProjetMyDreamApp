import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpBackend} from '@angular/common/http';
import {  Observable} from 'rxjs';
import {Meteo} from '../class/meteo'

const httpOptions={ headers : new HttpHeaders({'Content-Type': 'application/json'})};
const apiUrl="http://api.weatherstack.com/current";

@Injectable({
  providedIn: 'root'
})

export class MeteoService {

  constructor(private http: HttpClient, private handler : HttpBackend, private meteo: Meteo) 
  { this.http=new HttpClient(handler); }

  postville(meteo: Meteo): Observable<Meteo>{
    return this.http.post<Meteo>(apiUrl,meteo,httpOptions) ;
  }


}
