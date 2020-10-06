import { Injectable } from '@angular/core';
import{HttpClient, HttpBackend} from '@angular/common/http';
import { Soirees } from '../class/soirees';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoireesService {

  constructor(private http: HttpClient, private handler : HttpBackend) 
  {   this.http=new HttpClient(handler);}

  url='https://www.freedomtravel.tn/json/soirees.php';
    
  getSoirees(): Observable<Soirees>{
    return this.http.get<Soirees>(this.url)
  
 }
}
